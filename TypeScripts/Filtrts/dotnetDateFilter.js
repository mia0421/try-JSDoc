/// <reference path="../../typings/angularjs/angular.d.ts"/>
var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var Filters;
        (function (Filters) {
            var DotNetDateParser = (function () {
                function DotNetDateParser() {
                }
                DotNetDateParser.Factory = function ($log) {
                    return function (date) {
                        if (date) {
                            var minDate = '/Date(-62135596800000)/';
                            if (date == minDate) {
                                return null;
                            }
                            var newDate = new Date(parseInt(date.replace("/Date(", "").replace(")/", ""), 10));
                            return newDate;
                        }
                    };
                };
                return DotNetDateParser;
            })();
            Filters.DotNetDateParser = DotNetDateParser;
            angular.module('NineYi.Mall.Filters')
                .filter('nsDotNetDateParser', ['$log', DotNetDateParser.Factory]);
        })(Filters = Mall.Filters || (Mall.Filters = {}));
    })(Mall = NineYi.Mall || (NineYi.Mall = {}));
})(NineYi || (NineYi = {}));
//# sourceMappingURL=dotnetDateFilter.js.map