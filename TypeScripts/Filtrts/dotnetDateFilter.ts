/// <reference path="../../typings/angularjs/angular.d.ts"/>
module NineYi.Mall.Filters {
    /**
     * 解析MS Date格式Filter
     * @class NineYi.Mall.Filters#nsDotNetDateParser
     * @classdesc 解析MS Date格式Filter
     * @param {string} date api提供之MS Date格式字串
     *
     * @example
     * <caption>我是範例</caption>
     * {{Ctrl.InvoiceSentDateTime|nsDotNetDateParser|date:'yyyy/MM/dd'}}
     */
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