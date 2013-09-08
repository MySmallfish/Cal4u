(function(C) {
    C.Scanner = function($rootScope) {

        function simulateScan(barCode) {
            acceptBarcode(barCode);
        }

        function scan() {
            if (typeof cordova !== "undefined") {
                var scanner = cordova.require("cordova/plugin/BarcodeScanner");
                scanner.scan(function (result) {
                    if (result.text && !result.cancelled) {
                        acceptBarcode(result.text);
                    }
                });
            }
        }

        function acceptBarcode(barCode) {
            $rootScope.$broadcast("Cal.BarcodeScanned", barCode);
        }


        return {
            simulate: simulateScan,
            scan: scan
        };
    };
})(Cal);