(function ($, _, Cal) {

    function HomeCtrl($scope, $rootScope) {
        sessionStorage.clear();
        $scope.menuItems = [
            {
                Url: "#Login",
                CssClass: "Account",
                Text: "החשבון שלי"
            },
            {
                Url: "#CustomerService",
                CssClass: "CustomerService",
                Text: "שירות לקוחות"
            },
            {
                Url: "#CreditServices",
                CssClass: "CreditServices",
                Text: "פתרונות אשראי"
            },
            {
                Url: "#GetCalCard",
                CssClass: "GetCalCard",
                Text: "רוצה כרטיס Cal?"
            }

        ];
            $scope.hasBack = false;

    }

    Cal.HomeCtrl = HomeCtrl;

})(jQuery, _, Cal);