(function ($, _, Cal) {

    var app = angular.module("Cal4u", ["ngTouch"]);

    app.controller("AccountCtrl", Cal.AccountCtrl);
    app.controller("HomeCtrl", Cal.HomeCtrl);
    app.controller("LoginCtrl", Cal.LoginCtrl);
    app.service("sessionService", Cal.SessionService);
    app.service("loginManager", Cal.LoginManager);
    app.service("accountManager", Cal.AccountManager);

    app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/", { templateUrl: "views/Home.html", controller: "HomeCtrl" })
            .when("/Login", { templateUrl: "views/Login.html", controller: "LoginCtrl" })
            .when("/Account", { templateUrl: "views/Account.html", controller: "AccountCtrl" })
            .otherwise({ redirectTo: "/" });
    } ]);



})(jQuery, _, Cal);