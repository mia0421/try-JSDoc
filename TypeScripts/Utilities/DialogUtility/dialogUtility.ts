/// <reference path="../../../typings/angularjs/angular.d.ts"/>

module NineYi.Mall.Utilities {

    export class DialogUtility {
        static $inject = ['$q', '$modal'];

        constructor(
            private $q: ng.IQService,
            private $modal: ng.ui.bootstrap.IModalService) {
        }

        //// 通知視窗
        Notice(message:string, confirmTitle = '確認',useNewLine?:boolean):ng.IPromise<string> {
            var defer = this.$q.defer<string>();

            var modelSettingOption:ng.ui.bootstrap.custom.IModalSettings = {
                templateUrl: '/V2/TypeScripts/Utilities/DialogUtility/confirm.html',
                size: 'sm',
                windowClass: 'confirm-modal',
                backdrop: 'static',
                keyboard: false,
                resolve: {
                    dialogConfig: () => {
                        return {
                            Message: message,
                            ShowCancel: false,
                            ConfirmTitle: confirmTitle,
                            UseNewLine:useNewLine
                        }
                    }
                },
                controller: 'DialogController as DialogCtrl'
            };

            var modalInstance = this.$modal.open(modelSettingOption);
            modalInstance.result.then(defer.resolve, defer.reject);

            return defer.promise;
        }

        //// 會自動關閉的通知視窗
        AutoCloseNotice(message:string, confirmTitle = '確認'):ng.IPromise<string> {
            var defer = this.$q.defer<string>();
            var modelSettingOption:ng.ui.bootstrap.custom.IModalSettings = {
                templateUrl: '/V2/TypeScripts/Utilities/DialogUtility/confirm.html',
                size: 'sm',
                windowClass: 'confirm-modal',
                backdrop: 'static',
                keyboard: false,
                resolve: {
                    dialogConfig: ():IDialogScope => {
                        return {
                            Message: message,
                            ShowCancel: false,
                            ShowOk: false,
                            AutoClose: true,
                            ConfirmTitle: confirmTitle
                        }
                    }
                },
                controller: 'DialogController as DialogCtrl'
            };

            var modalInstance = this.$modal.open(modelSettingOption);
            modalInstance.result.then(defer.resolve, defer.reject);

            return defer.promise;
        }

        //// 確認視窗
        Confirm(message:string, confirmTitle = '確認', cancelTitle = '取消', showClose = true):ng.IPromise<string> {
            var defer = this.$q.defer<string>();
            var modelSettingOption:ng.ui.bootstrap.custom.IModalSettings = {
                templateUrl: '/V2/TypeScripts/Utilities/DialogUtility/confirm.html',
                size: 'sm',
                windowClass: 'confirm-modal',
                backdrop: 'static',
                keyboard: false,
                resolve: {
                    dialogConfig: ():IDialogScope => {
                        return {
                            Message: message,
                            ShowCancel: true,
                            ShowClose: showClose,
                            ConfirmTitle: confirmTitle,
                            CancelTitle: cancelTitle
                        }
                    }
                },
                controller: 'DialogController as DialogCtrl'
            };

            var modalInstance = this.$modal.open(modelSettingOption);
            modalInstance.result.then(defer.resolve, defer.reject);

            return defer.promise;
        }

        Custom(parms:ICustomDialogParams): ng.IPromise<any> {
            var defer = this.$q.defer<any>();

            var modelSettingOption: ng.ui.bootstrap.custom.IModalSettings = {
                templateUrl: parms.templateUrl,
                size: 'lg',
                windowClass: parms.windowClass,
                backdrop: typeof parms.backdrop==='undefined' ? 'static':parms.backdrop,
                keyboard: false,
                resolve: {
                    dialogConfig: () => {
                        return {
                            Title: parms.title,
                            Model: parms.model
                        }
                    }
                },
                controller: parms.controller
            };

            var modalInstance = this.$modal.open(modelSettingOption);

            modalInstance.result.then(defer.resolve, defer.reject);

            return defer.promise;
        }
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
        Toast(message:string, autoClose:number):ng.IPromise<string> {
            var defer = this.$q.defer<string>();

            var modelSettingOption:ng.ui.bootstrap.custom.IModalSettings = {
                templateUrl: '/V2/TypeScripts/Utilities/DialogUtility/toast.html',
                size: 'sm',
                windowClass: 'result-modal',
                backdrop: 'static',
                keyboard: false,
                resolve: {
                    dialogConfig: () => {
                        return {
                            Message: message,
                            AutoClose: autoClose
                        }
                    }
                },
                controller: 'DialogController as DialogCtrl'
            };

            var modalInstance = this.$modal.open(modelSettingOption);

            modalInstance.result.then(defer.resolve, defer.reject);

            return defer.promise;
        }
    }

    angular.module('NineYi.Mall.Utilities')
        .service('DialogUtility', DialogUtility);
}