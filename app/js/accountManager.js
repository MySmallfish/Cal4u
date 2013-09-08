(function ($, _, Cal) {

    Cal.AccountManager = function ($http, sessionService) {

        function fetchAccountsData() {
            return $http({
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "CalAuthScheme " + sessionService.getAuthenticationToken()
                },
                url: Cal.Url + "/CardsByAccounts",
                method: "GET"
            });
        }

        function fetchAccounts() {
            var result = fetchAccountsData().then(function (result) {
                var data = result.data;
                sessionService.saveItem("accounts", data.BankAccounts);
                sessionService.saveItem("userInfo", data.CustomerInfo);
                return data;
            });

            return result;
        }

        function getOrFetch(key) {
            var value = sessionService.getItem(key);
            var result = new $.Deferred(function (defer) {
                if (!value) {
                    fetchAccounts().then(function (newValue) {
                        value = sessionService.getItem(key);
                        defer.resolve(value);
                    });
                } else {
                    defer.resolve(value);
                }
            });


            return result;
        }

        function getAccounts() {
            return getOrFetch("accounts");
        }

        function getUserInfo() {
            return getOrFetch("userInfo");
        }

        return {
            fetch: fetchAccounts,
            getAccounts: getAccounts,
            getUserInfo: getUserInfo
        };
    }

})(jQuery, _, Cal);