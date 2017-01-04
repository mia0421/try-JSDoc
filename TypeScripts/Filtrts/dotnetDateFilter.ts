/// <reference path="../../typings/angularjs/angular.d.ts"/>
module NineYi.Mall.Filters {
    export class DotNetDateParser {
        public static Factory($log:ng.ILogService) {
            return (date):Date=> {
                if (date) {
                    var minDate = '/Date(-62135596800000)/';
                    if (date == minDate) {
                        return null;
                    }
                    var newDate = new Date(parseInt(date.replace("/Date(", "").replace(")/", ""), 10));
                    return newDate;
                }
            }
        }
    }

    angular.module('NineYi.Mall.Filters')
        .filter('nsDotNetDateParser', ['$log', DotNetDateParser.Factory]);
}