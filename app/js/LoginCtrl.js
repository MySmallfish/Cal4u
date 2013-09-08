(function ($, _, Cal) {

    function LoginCtrl($scope, loginManager) {

        function onLoginSucceeded(message) {
            $scope.isWaiting = false;
            $scope.message = message;
            location.href = "#Account";
        }

        $scope.loginUser = function () {
            sessionStorage.clear();
            $scope.isWaiting = true;
            loginManager.login($scope.Username, $scope.Password, onLoginSucceeded, function (e) {
                $scope.message = "Failure: " + e;
                $scope.isWaiting = false;
            });
        }

        $scope.hasBack = true;
    }

    Cal.LoginCtrl = LoginCtrl;

})(jQuery, _, Cal);
