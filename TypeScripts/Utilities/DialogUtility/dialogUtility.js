/// <reference path="../../../typings/angularjs/angular.d.ts"/>
var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var Utilities;
        (function (Utilities) {
            var DialogUtility = (function () {
                function DialogUtility($q, $modal) {
                    this.$q = $q;
                    this.$modal = $modal;
                }
                //// 通知視窗
                DialogUtility.prototype.Notice = function (message, confirmTitle, useNewLine) {
                    if (confirmTitle === void 0) { confirmTitle = '確認'; }
                    var defer = this.$q.defer();
                    var modelSettingOption = {
                        templateUrl: '/V2/TypeScripts/Utilities/DialogUtility/confirm.html',
                        size: 'sm',
                        windowClass: 'confirm-modal',
                        backdrop: 'static',
                        keyboard: false,
                        resolve: {
                            dialogConfig: function () {
                                return {
                                    Message: message,
                                    ShowCancel: false,
                                    ConfirmTitle: confirmTitle,
                                    UseNewLine: useNewLine
                                };
                            }
                        },
                        controller: 'DialogController as DialogCtrl'
                    };
                    var modalInstance = this.$modal.open(modelSettingOption);
                    modalInstance.result.then(defer.resolve, defer.reject);
                    return defer.promise;
                };
                //// 會自動關閉的通知視窗
                DialogUtility.prototype.AutoCloseNotice = function (message, confirmTitle) {
                    if (confirmTitle === void 0) { confirmTitle = '確認'; }
                    var defer = this.$q.defer();
                    var modelSettingOption = {
                        templateUrl: '/V2/TypeScripts/Utilities/DialogUtility/confirm.html',
                        size: 'sm',
                        windowClass: 'confirm-modal',
                        backdrop: 'static',
                        keyboard: false,
                        resolve: {
                            dialogConfig: function () {
                                return {
                                    Message: message,
                                    ShowCancel: false,
                                    ShowOk: false,
                                    AutoClose: true,
                                    ConfirmTitle: confirmTitle
                                };
                            }
                        },
                        controller: 'DialogController as DialogCtrl'
                    };
                    var modalInstance = this.$modal.open(modelSettingOption);
                    modalInstance.result.then(defer.resolve, defer.reject);
                    return defer.promise;
                };
                //// 確認視窗
                DialogUtility.prototype.Confirm = function (message, confirmTitle, cancelTitle, showClose) {
                    if (confirmTitle === void 0) { confirmTitle = '確認'; }
                    if (cancelTitle === void 0) { cancelTitle = '取消'; }
                    if (showClose === void 0) { showClose = true; }
                    var defer = this.$q.defer();
                    var modelSettingOption = {
                        templateUrl: '/V2/TypeScripts/Utilities/DialogUtility/confirm.html',
                        size: 'sm',
                        windowClass: 'confirm-modal',
                        backdrop: 'static',
                        keyboard: false,
                        resolve: {
                            dialogConfig: function () {
                                return {
                                    Message: message,
                                    ShowCancel: true,
                                    ShowClose: showClose,
                                    ConfirmTitle: confirmTitle,
                                    CancelTitle: cancelTitle
                                };
                            }
                        },
                        controller: 'DialogController as DialogCtrl'
                    };
                    var modalInstance = this.$modal.open(modelSettingOption);
                    modalInstance.result.then(defer.resolve, defer.reject);
                    return defer.promise;
                };
                DialogUtility.prototype.Custom = function (parms) {
                    var defer = this.$q.defer();
                    var modelSettingOption = {
                        templateUrl: parms.templateUrl,
                        size: 'lg',
                        windowClass: parms.windowClass,
                        backdrop: typeof parms.backdrop === 'undefined' ? 'static' : parms.backdrop,
                        keyboard: false,
                        resolve: {
                            dialogConfig: function () {
                                return {
                                    Title: parms.title,
                                    Model: parms.model
                                };
                            }
                        },
                        controller: parms.controller
                    };
                    var modalInstance = this.$modal.open(modelSettingOption);
                    modalInstance.result.then(defer.resolve, defer.reject);
                    return defer.promise;
                };
                /**
                 * @ngdoc function
                 * @name DialogUtility#Toast
                 * @methodOf  NineYi.Mall.Utilities:DialogUtility
                 *
                 * @description
                 * Toast純文字視窗
                 * message ＝> 顯示訊息
                 * autoClose => 顯示幾秒消失(毫秒)
                 */
                DialogUtility.prototype.Toast = function (message, autoClose) {
                    var defer = this.$q.defer();
                    var modelSettingOption = {
                        templateUrl: '/V2/TypeScripts/Utilities/DialogUtility/toast.html',
                        size: 'sm',
                        windowClass: 'result-modal',
                        backdrop: 'static',
                        keyboard: false,
                        resolve: {
                            dialogConfig: function () {
                                return {
                                    Message: message,
                                    AutoClose: autoClose
                                };
                            }
                        },
                        controller: 'DialogController as DialogCtrl'
                    };
                    var modalInstance = this.$modal.open(modelSettingOption);
                    modalInstance.result.then(defer.resolve, defer.reject);
                    return defer.promise;
                };
                DialogUtility.$inject = ['$q', '$modal'];
                return DialogUtility;
            })();
            Utilities.DialogUtility = DialogUtility;
            angular.module('NineYi.Mall.Utilities')
                .service('DialogUtility', DialogUtility);
        })(Utilities = Mall.Utilities || (Mall.Utilities = {}));
    })(Mall = NineYi.Mall || (NineYi.Mall = {}));
})(NineYi || (NineYi = {}));
//# sourceMappingURL=dialogUtility.js.map