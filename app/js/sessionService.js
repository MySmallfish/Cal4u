(function ($, _, Cal) {

    Cal.SessionService = function ($http) {
        function getAuthenticationToken() {
            return sessionStorage.getItem("token");
        }
        function setAuthenticationToken(token) {
            sessionStorage.setItem("token", token);
        }

        function startSession(token) {
            setAuthenticationToken(token);
        }

        function saveItem(key, value) {
            if (key && value) {
                sessionStorage.setItem(key, JSON.stringify(value));
            }
        }

        function getItem(key) {
            if (key) {
                var value = sessionStorage.getItem(key);
                if (value) {
                    value = JSON.parse(value);
                }
                return value;
            }
        }

        return {
            start: startSession,
            getAuthenticationToken: getAuthenticationToken,
            saveItem: saveItem,
            getItem: getItem
        };
    }

})(jQuery, _, Cal);