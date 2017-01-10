/// <reference path="../../../typings/angularjs/angular.d.ts"/>
var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var Utilities;
        (function (Utilities) {
            /**
             * 各種popup視窗
             * @class NineYi.Mall.Utilities#DialogUtility
             * @classdesc 各種popup視窗ex:Notice,AutoCloseNotice
             *
             */
            var DialogUtility = (function () {
                function DialogUtility($q, $modal) {
                    this.$q = $q;
                    this.$modal = $modal;
                }
                /**
                 * 通知視窗
                 * @func NineYi.Mall.Utilities#DialogUtility#Notice
                 *
                 * @param {string} message 顯示訊息
                 * @param {string} [confirmTitle=確認] 按鈕顯示字樣
                 * @param {boolean=} useNewLine 顯示特定樣式
                 * @example
                 * <caption>我是範例</caption>
                 * this.dialogUtility.Notice('跟你說一個秘密','好喔');
                 */
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
                /**
                 * 會自動關閉的通知視窗
                 * @func NineYi.Mall.Utilities#DialogUtility#AutoCloseNotice
                 *
                 * @param {string} message 顯示訊息
                 * @param {string} [confirmTitle=確認] 按鈕顯示字樣
                 */
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
                /**
                 * 確認視窗
                 * @func NineYi.Mall.Utilities#DialogUtility#Confirm
                 *
                 * @param {string} message 顯示訊息
                 * @param {string} [confirmTitle=確認] resolve按鈕文字
                 * @param {string} [cancelTitle=取消] reject按鈕文字
                 * @param {boolean} [showClose=true 按鈕顯示字樣
                 * @return {IPromise.<any>}
                 */
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
                /**
                 * 自訂通知視窗
                 * @func NineYi.Mall.Utilities#DialogUtility#Custom
                 * @param  {ICustomDialogParams} parms 自訂通知視窗參數
                 * @param {string} parms.title 抬頭
                 * @param {any} parms.model dialog頁面用參數
                 * @param {any=} parms.backdrop 這是什麼...
                 * @param {string} parms.templateUrl 引用頁面路徑
                 * @param {string} parms.windowClass 父層class名稱
                 * @param {string} parms.controller ctrl名稱
                 *
                 * @return {IPromise.<any>}
                 */
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
                 * Toast純文字視窗
                 * @func NineYi.Mall.Utilities#DialogUtility#Toast
                 *
                 * @param {string} message 顯示訊息
                 * @param {number} autoClose 顯示幾秒消失(毫秒)
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