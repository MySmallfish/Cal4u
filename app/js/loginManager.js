(function ($, _, Cal) {

    Cal.LoginManager = function ($http, sessionService) {

        function login(userName, password, onSuccess, onFailure) {
            function onReceived(result, status) {
                if (status == 201 &&
                    result.Response.Status.Succeeded &&
                    result.AuthenticationToken) {
                    sessionService.start(result.AuthenticationToken);
                    onSuccess("Success!");
                }
            }
            $http({
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                url: Cal.Url + "/CalAuthenticator",
                method: "POST",
                data: { UserName: userName, Password: password }
            }).success(onReceived).error(onFailure);

        }

        return {
            login: login
        };
    }

})(jQuery, _, Cal);