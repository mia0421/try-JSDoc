/// <reference path="../../typings/angularjs/angular.d.ts"/>


module NineYi.Mall.Directives {
    angular.module('NineYi.Mall.Directives')
        .directive('nsAddress', ['$log', 'ZipCodeService', ($log:ng.ILogService, zipCodeService):ng.IDirective => {
            /**
             * @class NineYi.Mall.Directives#nsAddress
             * @classdesc
             * ## 地址元件
             * 固定格式用於選擇城市行政區並且輸入地址的表單
             *
             * @param {!string} nsCity 城市選單(必傳)
             * @param {!string} nsZipcode 當前郵遞區號(必傳)
             * @param {!string} nsDistrict 行政區(必傳)
             * @param {!string} nsAddressdetail 地址(必傳)
             * @param {?string} nsFormTitle 表單抬頭(可null)
             * @param {!string} nsIsRequired 是否必填(必傳)
             * @param {string=} nsSubmitted 是否已經Submitted(可選參數)
             *
             * @example
             * <caption>我是範例</caption>
             * <div ns-address
             *      ns-city="city"
             *      ns-zipcode="zipcode"
             *      ns-district="district"
             *      ns-addressdetail="addressdetail"
             *      ns-form-title="title"
             *      ns-is-required="true"
             *      ns-submitted="true">
             * </div>
             */
            return {
                link: (scope, element:ng.IAugmentedJQuery, attributes, ctrl) => {

                    scope.$watch(
                        () => ctrl.SelectedCity,
                        (newVal, oldVal) => {
                            if (newVal !== oldVal) {
                                if (newVal) {
                                    scope.City = newVal.City;
                                } else {
                                    scope.City = '';
                                }
                            }

                            //// 若載入時地址未選，且預選地址已有資料，將地址設定為預選地址
                            if (!scope.City && newVal) {
                                scope.City = newVal.City;
                            }
                        });

                    scope.$watch(
                        () => ctrl.SelectedDistrict,
                        (newVal, oldVal) => {
                            if (newVal !== oldVal) {
                                if (newVal) {
                                    scope.District = newVal.District;
                                    scope.Zipcode = newVal.ZipCode;
                                } else {
                                    scope.District = '';
                                    scope.Zipcode = '';
                                }
                            }
                        }, true);

                    scope.$watch(
                        () => ctrl.AddressDetail,
                        (newVal, oldVal) => {
                            if (newVal !== oldVal) {
                                scope.Addressdetail = newVal;
                            }
                        });

                },
                restrict: 'EA',
                templateUrl: '/V2/TypeScripts/Components/address.html',
                controller: 'AddressDirectiveController',
                controllerAs: 'AddressCtrl',
                scope: {
                    City: '=nsCity',
                    District: '=nsDistrict',
                    Zipcode: '=nsZipcode',
                    Addressdetail: '=nsAddressdetail',
                    Submitted: '=nsSubmitted',
                    Formtitle: '@?nsFormTitle',
                    IsRequired: '=nsIsRequired',
                },
                replace: true
            }
        }]);
} 