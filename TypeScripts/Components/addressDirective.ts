/// <reference path="../../typings/angularjs/angular.d.ts"/>

module NineYi.Mall.Directives {
    angular.module('NineYi.Mall.Directives')
        .directive('nsAddress', ['$log', 'ZipCodeService', ($log:ng.ILogService, zipCodeService):ng.IDirective => {
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