(function ($, _, Cal) {

    function AccountCtrl($scope, accountManager) {
        $scope.user = accountManager.getUserInfo();

        $scope.isWaiting = true;
        accountManager.getAccounts().then(function (accounts) {
            $scope.accounts = accounts;
            $scope.accountIndex = $scope.accountIndex || 0;
            selectAccount();

            if (!$scope.$$phase) {
                $scope.$apply();
            }
        }, function () {
            location.href = "#/Login";
        });


        function selectAccount() {
            if ($scope.accounts && $scope.accounts.length) {
                $scope.selectedAccount = $scope.accounts[$scope.accountIndex];
                $scope.isWaiting = false;
                $scope.cardIndex = 0;
            }
        }


        $scope.nextAccount = function () {
            $scope.accountIndex = ++$scope.accountIndex % $scope.accounts.length;

            selectAccount();
        }
        $scope.prevAccount = function () {
            if ($scope.accountIndex == 0) {
                $scope.accountIndex = $scope.accounts.length - 1;
            } else {
                $scope.accountIndex--;
            }


            selectAccount();
        }

        $scope.cardIndex = 0;
        $scope.nextCard = function () {
            if ($scope.selectedAccount) {
                $scope.cardIndex++;
                if ($scope.cardIndex == $scope.selectedAccount.Cards.length) {
                    $scope.cardIndex = 0
                }
            }
        }
        $scope.prevCard = function () {
            if ($scope.selectedAccount) {
                $scope.cardIndex--;
                if ($scope.cardIndex == -1) {
                    $scope.cardIndex = $scope.selectedAccount.Cards.length - 1;
                }
            }
        }

    }



    Cal.AccountCtrl = AccountCtrl;

})(jQuery, _, Cal);
