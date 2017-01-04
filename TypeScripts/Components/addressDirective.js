/// <reference path="../../typings/angularjs/angular.d.ts"/>
var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var Directives;
        (function (Directives) {
            angular.module('NineYi.Mall.Directives')
                .directive('nsAddress', ['$log', 'ZipCodeService', function ($log, zipCodeService) {
                    return {
                        link: function (scope, element, attributes, ctrl) {
                            scope.$watch(function () { return ctrl.SelectedCity; }, function (newVal, oldVal) {
                                if (newVal !== oldVal) {
                                    if (newVal) {
                                        scope.City = newVal.City;
                                    }
                                    else {
                                        scope.City = '';
                                    }
                                }
                                //// 若載入時地址未選，且預選地址已有資料，將地址設定為預選地址
                                if (!scope.City && newVal) {
                                    scope.City = newVal.City;
                                }
                            });
                            scope.$watch(function () { return ctrl.SelectedDistrict; }, function (newVal, oldVal) {
                                if (newVal !== oldVal) {
                                    if (newVal) {
                                        scope.District = newVal.District;
                                        scope.Zipcode = newVal.ZipCode;
                                    }
                                    else {
                                        scope.District = '';
                                        scope.Zipcode = '';
                                    }
                                }
                            }, true);
                            scope.$watch(function () { return ctrl.AddressDetail; }, function (newVal, oldVal) {
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
                            IsRequired: '=nsIsRequired'
                        },
                        replace: true
                    };
                }]);
        })(Directives = Mall.Directives || (Mall.Directives = {}));
    })(Mall = NineYi.Mall || (NineYi.Mall = {}));
})(NineYi || (NineYi = {}));
//# sourceMappingURL=addressDirective.js.map