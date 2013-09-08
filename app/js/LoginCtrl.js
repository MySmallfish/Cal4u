(function ($, _, Cal) {

    function LoginCtrl($scope, loginManager, scanner) {

        function onBarcodeScanned(barCode) {
            $scope.Username = barCode;
        }

        $scope.$on("Cal.BarcodeScanned", function(e, barCode) {
            if (!$scope.$$phase) {
                $scope.$apply(function () {
                    onBarcodeScanned(barCode);
                });
            } else {
                onBarcodeScanned(barCode);
            }
        });
        scanner.scan();

        function onLoginSucceeded(message) {
            $scope.isWaiting = false;
            $scope.message = message;
            location.href = "#Account";
        }

        $scope.loginUser = function () {
            
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 50,
                destinationType: cordova.Camera.DestinationType.DATA_URL
            });

            function onSuccess(imageData) {
                var image = document.getElementById('myImage');
                image.src = "data:image/jpeg;base64," + imageData;
            }

            function onFail(message) {
                $scope.message = ('Failed because: ' + message);
                $scope.$apply();
            }

            sessionStorage.clear();
            $scope.isWaiting = true;
            loginManager.login($scope.Username, $scope.Password, onLoginSucceeded, function(e) {
                $scope.message = "Failure: " + e;
                $scope.isWaiting = false;
            });
        };

        $scope.hasBack = true;
    }

    Cal.LoginCtrl = LoginCtrl;

})(jQuery, _, Cal);
