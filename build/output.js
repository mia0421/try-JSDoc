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
/// <reference path="../../typings/angularjs/angular.d.ts"/>
var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var Directives;
        (function (Directives) {
            var BasketDirective = (function () {
                function BasketDirective($log, $timeout, $sce, DeviceValue) {
                    var _this = this;
                    this.$log = $log;
                    this.$timeout = $timeout;
                    this.$sce = $sce;
                    this.DeviceValue = DeviceValue;
                    this.restrict = 'EA';
                    this.replace = true;
                    this.scope = {
                        SalepageList: '=nsSalepageList',
                        DiscountMessage: '=nsDiscountMessage',
                        ConfirmToShop: '&nsConfirmToShop'
                    };
                    this.templateUrl = '/V2/TypeScripts/Components/basket.html';
                    this.link = function (scope, element, attr) {
                        scope.IsOpen = false;
                        scope.$watch(function () { return scope.DiscountMessage; }, function (newVal, oldVal) {
                            if (newVal !== oldVal) {
                                function fetchSpecial(data) {
                                    var result = /[優惠價|還差|再選|已選購] (\$[0-9]+|[0-9]+)/i.exec(data);
                                    return result && result[1] || null;
                                }
                                //// 優惠金額
                                var DiscountNum = fetchSpecial(scope.DiscountMessage.PromotionDiscountTitle);
                                //// 已選金額或件數
                                var ConditionNum = fetchSpecial(scope.DiscountMessage.PromotionConditionTitle);
                                var DiscountHtml = scope.DiscountMessage.PromotionDiscountTitle.replace(DiscountNum, "<span class='basket-footer-highlight'>" + DiscountNum + "</span>");
                                if (_this.DeviceValue.BrowsingMode === NineYi.Mall.Models.BrowsingModeEnum.Mobile) {
                                    //// Mobile無優惠提示
                                    var ConditionHtml = scope.DiscountMessage.PromotionConditionTitle.replace(ConditionNum, "<b>" + ConditionNum + "</b>");
                                    scope.DiscountMessageHtml = _this.$sce.trustAsHtml(DiscountHtml);
                                    scope.DiscountSubMessageHtml = _this.$sce.trustAsHtml(ConditionHtml);
                                }
                                else {
                                    var ConditionHtml = scope.DiscountMessage.PromotionConditionTitle.replace(ConditionNum, "<span class='basket-footer-highlight'>" + ConditionNum + "</span>");
                                    scope.DiscountMessageHtml = _this.$sce.trustAsHtml(ConditionHtml + "\uFF0C" + DiscountHtml);
                                    scope.DiscountSubMessageHtml = _this.$sce.trustAsHtml(scope.DiscountMessage.RecommandConditionTitle === '' ? '&nbsp' : scope.DiscountMessage.RecommandConditionTitle);
                                }
                            }
                        });
                        //// watch SalepageList長度變化
                        scope.$watchCollection(function () { return scope.SalepageList; }, function (newVal, oldVal) {
                            if (newVal.length > oldVal.length) {
                                //// Desktop版第一次加入要自動打開
                                if (newVal.length === 1 && _this.DeviceValue.BrowsingMode !== NineYi.Mall.Models.BrowsingModeEnum.Mobile) {
                                    scope.IsOpen = true;
                                }
                                //// 針對新加入的item，做淡入效果後移除動畫
                                var lastIndex = newVal.length - 1;
                                newVal[lastIndex].IsNew = true;
                                _this.$timeout(function () {
                                    newVal[lastIndex].IsNew = false;
                                }, 800);
                            }
                        });
                        scope.RemoveItem = function (SalePageId, SKUId) {
                            var removeIndex;
                            for (var i = 0; i < scope.SalepageList.length; i++) {
                                if (scope.SalepageList[i].SalePageId === SalePageId && scope.SalepageList[i].SaleProductSKUId === SKUId) {
                                    removeIndex = i;
                                    // 加入淡出效果
                                    scope.SalepageList[i].IsRemove = true;
                                    break;
                                }
                            }
                            // 動畫淡出後，執行刪除
                            _this.$timeout(function () {
                                if (removeIndex || typeof (removeIndex) === 'number') {
                                    scope.SalepageList.splice(removeIndex, 1);
                                }
                                //// 刪除到無商品時，要自動關閉
                                if (scope.SalepageList.length === 0) {
                                    scope.IsOpen = false;
                                }
                                //// 通知Controller菜藍內商品被刪除
                                scope.$emit('onBasketDeleteItem', {
                                    salepageId: SalePageId,
                                    skuId: SKUId
                                });
                            }, 600);
                        };
                    };
                }
                BasketDirective.factory = function () {
                    var directive = function ($log, $timeout, $sce, DeviceValue) {
                        return new BasketDirective($log, $timeout, $sce, DeviceValue);
                    };
                    directive.$inject = ['$log', '$timeout', '$sce', 'DeviceValue'];
                    return directive;
                };
                return BasketDirective;
            })();
            Directives.BasketDirective = BasketDirective;
            angular.module('NineYi.Mall.Directives').directive('nsBasket', BasketDirective.factory());
        })(Directives = Mall.Directives || (Mall.Directives = {}));
    })(Mall = NineYi.Mall || (NineYi.Mall = {}));
})(NineYi || (NineYi = {}));
//# sourceMappingURL=basketDirective.js.map
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
/// <reference path="../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../Scripts/TypeLite.Net4.d.ts"/>
/**
 API Services
 @namespace NineYi.Mall.Services
 */
var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var Services;
        (function (Services) {
            var PromotionV2Service = (function () {
                /**
                 * 活動頁相關api
                 * @class NineYi.Mall.Services#PromotionV2Service
                 * @classdesc 活動頁相關api
                 * @param {Configs.IConfig} config
                 * @param {ng.IQService} $q
                 * @param {ng.IHttpService} $http
                 */
                function PromotionV2Service(config, $q, $http) {
                    this.config = config;
                    this.$q = $q;
                    this.$http = $http;
                }
                /**
                 * 取得On檔的商店活動清單
                 * @method NineYi.Mall.Services#PromotionV2Service#GetList
                 * @param {number} shopId 商店編號
                 * @param {string} orderBy 排序條件: 最新活動(Newest) 或是 即將結束(ComingToEnd)
                 * @param {number} startIndex 頁碼從0開始
                 * @param {number} maxCount 一頁筆數
                 * @returns {NineYi.WebStore.Frontend.BE.Promotion.PromotionListResultEntity} PromotionListResultEntity 商店活動清單
                 */
                PromotionV2Service.prototype.GetList = function (shopId, orderBy, startIndex, maxCount) {
                    var defer = this.$q.defer();
                    var url = this.config.webapiUrl + ("/PromotionV2/GetList/" + shopId + "?orderBy=" + orderBy + "&startIndex=" + startIndex + "&maxCount=" + maxCount);
                    this.$http.get(url, {
                        withCredentials: true
                    })
                        .success(function (data) {
                        defer.resolve(data);
                    })
                        .error(defer.reject);
                    return defer.promise;
                };
                /**
                 * 活動詳細
                 * @method NineYi.Mall.Services#PromotionV2Service#GetDetail
                 * @param {number} promotionId 活動編號
                 * @returns {NineYi.WebStore.Frontend.BE.Promotion.PromotionDetailV2ForDisplayEntity} PromotionDetailV2ForDisplayEntity 商店活動明細
                 */
                PromotionV2Service.prototype.GetDetail = function (promotionId) {
                    var defer = this.$q.defer();
                    var url = this.config.webapiUrl + '/PromotionV2/GetDetail/' + promotionId;
                    this.$http.get(url, {
                        withCredentials: true
                    })
                        .success(function (result) {
                        defer.resolve(result);
                    })
                        .error(defer.reject);
                    return defer.promise;
                };
                /**
                 * 取得活動商品清單
                 * @method NineYi.Mall.Services#PromotionV2Service#GetSalePageList
                 * @param {number} shopId 商店編號
                 * @param {number} promotionId 活動編號
                 * @param {number} categoryId 分類編號(全部商品傳0)
                 * @param {number} startIndex 頁碼從0開始
                 * @param {number} maxCount 一頁比數
                 * @returns {NineYi.WebStore.Frontend.BE.Promotion.PromotionSalePageListResultEntity} PromotionSalePageListResultEntity 活動商品清單
                 */
                PromotionV2Service.prototype.GetSalePageList = function (shopId, promotionId, categoryId, startIndex, maxCount) {
                    var defer = this.$q.defer();
                    var url = this.config.webapiUrl + ("/PromotionV2/GetSalePageList/" + shopId + "/" + promotionId + "?CategoryId=" + categoryId + "&StartIndex=" + startIndex + "&maxCount=" + maxCount);
                    this.$http.get(url, {
                        withCredentials: true
                    })
                        .success(function (result) {
                        defer.resolve(result);
                    })
                        .error(defer.reject);
                    return defer.promise;
                };
                /**
                 * 計算折扣
                 * @method NineYi.Mall.Services#PromotionV2Service#Calculate
                 * @param {number} shopId shopId
                 * @param {number} PromotionId 活動序號
                 * @param {number} SalePageList 選購商品清單
                 * @returns {NineYi.WebStore.Frontend.BE.Promotion.PromotionDetailDiscountClientEntity} PromotionDetailDiscountClientEntity 計算折扣結果
                 */
                PromotionV2Service.prototype.Calculate = function (shopId, promotionId, salePageList) {
                    var defer = this.$q.defer();
                    var url = this.config.webapiUrl + '/PromotionV2/Calculate';
                    this.$http.post(url, {
                        promotionDetailDiscount: JSON.stringify({
                            ShopId: shopId,
                            PromotionId: +promotionId,
                            SalePageList: salePageList
                        })
                    }, {
                        withCredentials: true
                    })
                        .success(function (result) {
                        defer.resolve(result);
                    })
                        .error(defer.reject);
                    return defer.promise;
                };
                PromotionV2Service.$inject = ['Mall.Config', '$q', '$http'];
                return PromotionV2Service;
            })();
            Services.PromotionV2Service = PromotionV2Service;
            angular.module('NineYi.Mall.Services')
                .service('PromotionV2Service', PromotionV2Service);
        })(Services = Mall.Services || (Mall.Services = {}));
    })(Mall = NineYi.Mall || (NineYi.Mall = {}));
})(NineYi || (NineYi = {}));
//# sourceMappingURL=promotionV2Service.js.map
/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/TypeLite.Net4.d.ts"/>
/**
 controller
 @namespace NineYi.Mall.Controllers
 */
var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var Controllers;
        (function (Controllers) {
            /**
             * 活動頁列表list controller
             * @class NineYi.Mall.Controllers#PromotionListController
             * @classdesc 活動頁列表list controller
             */
            var PromotionListController = (function () {
                function PromotionListController($rootScope, $scope, $log, $window, $filter, $q, DialogUtility, LoadingBarUtility, GoogleAnalyticsUtility, DeviceValue, PromotionV2Service, ShopId, PromotionListClass) {
                    this.$rootScope = $rootScope;
                    this.$scope = $scope;
                    this.$log = $log;
                    this.$window = $window;
                    this.$filter = $filter;
                    this.$q = $q;
                    this.DialogUtility = DialogUtility;
                    this.LoadingBarUtility = LoadingBarUtility;
                    this.GoogleAnalyticsUtility = GoogleAnalyticsUtility;
                    this.DeviceValue = DeviceValue;
                    this.PromotionV2Service = PromotionV2Service;
                    this.ShopId = ShopId;
                    this.PromotionListClass = PromotionListClass;
                    /**
                     * 裝置尺寸
                     * @member NineYi.Mall.Controllers#PromotionListController#PageSize
                     * @type {string}
                     * @default ""
                     */
                    this.PageSize = "";
                    /**
                     * 目前顯示到第幾筆
                     * @member NineYi.Mall.Controllers#PromotionListController#StartIndex
                     * @type {number}
                     * @default ""
                     */
                    this.StartIndex = null;
                    /**
                     * 總筆數
                     * @member NineYi.Mall.Controllers#PromotionListController#TotalCount
                     * @type {number}
                     * @default ""
                     */
                    this.TotalCount = null;
                    /**
                     * 排序方式
                     * @member NineYi.Mall.Controllers#PromotionListController#TotalCount
                     * @type {string}
                     * @desc
                     * 1. 最新活動(Newest)
                     * 2. 即將結束(ComingToEnd)
                     * @default ""
                     */
                    this.OrderBy = "";
                    /**
                     * 瀑布流directives參數
                     * @member NineYi.Mall.Controllers#PromotionListController#EndlessIsLock
                     * @type {boolean}
                     * @default false
                     */
                    this.EndlessIsLock = false;
                    /**
                     * 瀑布流directives參數
                     * @member NineYi.Mall.Controllers#PromotionListController#EndlessScrollListener
                     * @type {NineYi.Mall.Directives.IScrollListenerEntity}
                     * @default null
                     */
                    this.EndlessScrollListener = null;
                    /**
                     * 折扣活動列表
                     * @member NineYi.Mall.Controller#PromotionListController#PromotionList
                     * @type {NineYi.Mall.BE.PromotionListEntity[]}
                     * @default []
                     */
                    this.PromotionList = [];
                    /**
                     * 是否為Mobile
                     * @member NineYi.Mall.Controllers#PromotionListController#IsMobile
                     * @type {boolean}
                     * @default false
                     */
                    this.IsMobile = false;
                    /**
                     * 是否為Loading狀態(用以判斷無折扣活動的情況)
                     * @member NineYi.Mall.Controllers#PromotionListController#IsLoading
                     * @type {boolean}
                     * @default false
                     */
                    this.IsLoading = false;
                    /**
                     * 倒數元件顯示條件＆格式
                     * @member NineYi.Mall.Controllers#PromotionListController#ClockCondition
                     * @type {any}
                     * @default null
                     */
                    this.ClockCondition = null;
                    /**
                     * 活動條件類型
                     * @member NineYi.Mall.Controllers#PromotionListController#PromotionConditionTypeV2Enum
                     * @type {PromotionConditionTypeV2Enum}
                     * @default PromotionConditionTypeV2Enum
                     * @desc
                     * 1. TotalPrice: 滿額
                     * 2. TotalQty: 滿件
                     * 3. ReachQty: 任
                     * 4. TotalPriceV2: 滿額v2
                     * 5. TotalQtyV2: 滿件v2
                     */
                    this.PromotionConditionTypeV2Enum = NineYi.WebStore.Frontend.BE.Promotion.PromotionConditionTypeV2Enum;
                    this.PageSize = 50;
                    this.StartIndex = 0;
                    this.TotalCount = 0;
                    this.OrderBy = 'Newest';
                    this.EndlessIsLock = false;
                    this.IsLoading = false;
                    this.PromotionList = [];
                    this.ClockCondition = [
                        //// 最後1分鐘
                        {
                            Tick: 60000,
                            Format: [NineYi.Mall.Models.ClockTypeEnum.Second]
                        },
                        //// 最後1小時
                        {
                            Tick: 3600000,
                            Format: [NineYi.Mall.Models.ClockTypeEnum.Minute, NineYi.Mall.Models.ClockTypeEnum.Second]
                        },
                        //// 最後3小時
                        {
                            Tick: 3600000 * 3,
                            Format: [NineYi.Mall.Models.ClockTypeEnum.Hour, NineYi.Mall.Models.ClockTypeEnum.Minute, NineYi.Mall.Models.ClockTypeEnum.Second]
                        },
                        //// 最後24小時
                        {
                            Tick: 3600000 * 24,
                            Format: [NineYi.Mall.Models.ClockTypeEnum.Hour]
                        }
                    ];
                    this.IsMobile = this.DeviceValue.BrowsingMode === NineYi.Mall.Models.BrowsingModeEnum.Mobile;
                    this.LoadingBarUtility.EnableLoadingBar();
                    this.GetNextPage();
                }
                /**
                 變換排序
                 @method  NineYi.Mall.Controllers#PromotionListController#ChangeOrderBy
                 @param {boolean} OrderByName 排序方式( 最新活動:Newest / 即將結束:ComingToEnd )
                 */
                PromotionListController.prototype.ChangeOrderBy = function (OrderByName) {
                    if (OrderByName !== this.OrderBy) {
                        this.TrackEvent('折扣活動列表-切換排序', (OrderByName === 'Newest' ? '切換排序/最新活動Tab' : '切換排序/即將結束Tab'));
                        /// 如果瀑布流已關閉重新啟動
                        if (this.StartIndex === -1) {
                            this.EndlessScrollListener && this.EndlessScrollListener.listener.on('scroll', this.EndlessScrollListener.event);
                        }
                        //// 重新開始取資料
                        this.StartIndex = 0;
                        this.TotalCount = 0;
                        this.PromotionList.length = 0;
                        this.OrderBy = OrderByName;
                        this.GetNextPage();
                    }
                };
                /**
                 * 瀑布流取得下50筆
                 * @param {boolean} OrderByName 排序方式( 最新活動:Newest / 即將結束:ComingToEnd )
                 * @constructor
                 */
                PromotionListController.prototype.GetNextPage = function () {
                    var _this = this;
                    this.IsLoading = true;
                    this.EndlessIsLock = true;
                    //// 取得活動列表
                    this.GetPromotionList(this.ShopId, this.OrderBy, this.StartIndex, this.PageSize)
                        .then(function () {
                        _this.EndlessIsLock = false;
                        _this.IsLoading = false;
                        //// 沒有資料要顯示了關閉瀑布流Directive
                        _this.StartIndex += _this.PageSize;
                        if (_this.StartIndex >= _this.TotalCount) {
                            _this.StartIndex = -1;
                        }
                    });
                };
                /**
                 * 取得活動列表資料
                 * @param {number} ShopId 商店ID
                 * @param {string} OrderBy 排序方式
                 * @param {number} StartIndex 起始筆數
                 * @param {number} PageSize 共取幾筆
                 * @constructor
                 */
                PromotionListController.prototype.GetPromotionList = function (ShopId, OrderBy, StartIndex, PageSize) {
                    var _this = this;
                    var defer = this.$q.defer();
                    this.LoadingBarUtility.ShowLoadingBar();
                    this.PromotionV2Service.GetList(ShopId, OrderBy, StartIndex, PageSize)
                        .then(function (result) {
                        if (result.ReturnCode === 'API0001') {
                            _this.TotalCount = result.Data.PromotionCount;
                            result.Data.PromotionList.map(function (Item) {
                                var promotion = new _this.PromotionListClass(Item);
                                if (promotion.isProcessing()) {
                                    _this.PromotionList.push(promotion);
                                }
                            });
                        }
                        else {
                            _this.$log.info('api GetPromotionList 活動列表 Error ' + result.Message);
                            _this.DialogUtility.Notice(result.Message).then(function () {
                                _this.$window.location.href = '/';
                            });
                        }
                    }, function () {
                        _this.$log.info('api GetPromotionList 活動列表 Error ');
                        _this.DialogUtility.Notice('無法順利連線, 請檢查網路狀況').then(function () {
                            _this.$window.location.href = '/';
                        });
                    })
                        .finally(function () {
                        _this.LoadingBarUtility.HideLoadingBar();
                        defer.resolve();
                    });
                    return defer.promise;
                };
                /**
                 * 倒數計時時移除該活動
                 * @param {Date} EndDateTime 活動結束時
                 * @constructor
                 */
                PromotionListController.prototype.HidePromotion = function (EndDateTime) {
                    var deleteIndex = 0;
                    this.PromotionList.map(function (Item, index) {
                        if (Item.model.EndDateTime === EndDateTime) {
                            deleteIndex = index;
                        }
                    });
                    this.PromotionList.splice(deleteIndex, 1);
                };
                /**
                 * GA
                 * @constructor
                 */
                PromotionListController.prototype.TrackEvent = function (Category, Action, Label, Value) {
                    this.GoogleAnalyticsUtility.TrackEvent(Category, Action, Label, Value);
                };
                PromotionListController.$inject = [
                    '$rootScope',
                    '$scope',
                    '$log',
                    '$window',
                    '$filter',
                    '$q',
                    'DialogUtility',
                    'LoadingBarUtility',
                    'GoogleAnalyticsUtility',
                    'DeviceValue',
                    'PromotionV2Service',
                    'ShopId',
                    'PromotionListClass'];
                return PromotionListController;
            })();
            Controllers.PromotionListController = PromotionListController;
            angular.module('NineYi.Mall.Controllers')
                .controller('PromotionListController', PromotionListController);
        })(Controllers = Mall.Controllers || (Mall.Controllers = {}));
    })(Mall = NineYi.Mall || (NineYi.Mall = {}));
})(NineYi || (NineYi = {}));
//# sourceMappingURL=promotionListController.js.map
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
/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/TypeLite.Net4.d.ts"/>
/**
 Theme 大C元件
 @namespace NineYi.Theme.Components
 */
var NineYi;
(function (NineYi) {
    var Theme;
    (function (Theme) {
        var Components;
        (function (Components) {
            /**
             `側欄商品分類元件 (description可以寫markdown)`
             @class NineYi.Theme.Components#CategoryMenuController
             @classdesc
             ## classdesc用來說明一下這個component
             * 可以寫**markdown**
             * 也可寫多行
        
             @param {ng.IScope} $scope 說明一下$scope
             @param {ng.ILogService} $log 說明一下$log
             @param {NineYi.Mall.Values.IValue} value 說明一下IValue
             @param {ng.IWindowService} $window  說明一下$window
             @param {NineYi.Mall.Utilities.GoogleAnalyticsUtility} googleAnalyticsUtility  說明一下googleAnalyticsUtility
             @param {NineYi.Mall.Services.ShopCategoryService} shopCategoryService  說明一下shopCategoryService
             @param {NineYi.Mall.Services.OfficialService} officaiService  說明一下officaiService
             @param {number} salePageCategoryId 說明一下salePageCategoryId
             @param {NineYi.Mall.Utilities.UrlUtility} UrlUtility 說明一下UrlUtility
             */
            var CategoryMenuController = (function () {
                function CategoryMenuController($scope, $log, value, $window, googleAnalyticsUtility, shopCategoryService, officaiService, salePageCategoryId, UrlUtility) {
                    var _this = this;
                    this.$scope = $scope;
                    this.$log = $log;
                    this.value = value;
                    this.$window = $window;
                    this.googleAnalyticsUtility = googleAnalyticsUtility;
                    this.shopCategoryService = shopCategoryService;
                    this.officaiService = officaiService;
                    this.salePageCategoryId = salePageCategoryId;
                    this.UrlUtility = UrlUtility;
                    /**
                     @member NineYi.Theme.Components#CategoryMenuController#templateUrl 裝置尺寸
                     @type {string}
                     @default ""
                     */
                    this.DeviceSize = "";
                    /**
                     @member NineYi.Theme.Components#CategoryMenuController#ShopCategoryData 商店分類清單
                     @type {NineYi.WebStore.BE.ShopCategory.ShopCategoryDataForFrontendEntity}
                     @default null
                     */
                    this.ShopCategoryData = null;
                    /**
                     @member NineYi.Theme.Components#CategoryMenuController#DiscountPriceList 包含折扣活動的分類清單
                     @type {number[]}
                     @default []
                     */
                    this.DiscountPriceList = [];
                    /**
                     @member NineYi.Theme.Components#CategoryMenuController#FreeGiftList 包含滿額贈活動的分類清單
                     @type {number[]}
                     @default []
                     */
                    this.FreeGiftList = [];
                    /**
                     @member NineYi.Theme.Components#CategoryMenuController#OfficialPromotionTargetList 活動Tag list
                     @type {NineYi.WebStore.BE.Promotion.PromotionDetailForAPPEntity[]}
                     @default []
                     */
                    this.OfficialPromotionTargetList = [];
                    this.DeviceSize = this.value.deviceSize;
                    this.shopCategoryService.GetShopCategoryListPromise().then(null, null, function (result) {
                        _this.ShopCategoryData = result;
                        if (_this.ShopCategoryData) {
                            if (_this.salePageCategoryId) {
                                _this.SetActiveLink(_this.ShopCategoryData.List, _this.salePageCategoryId);
                            }
                            else {
                                // Query cid 側欄highlight來源的小分類頁
                                var cid = parseInt(_this.UrlUtility.GetQuerystring('cid'));
                                if (cid) {
                                    _this.salePageCategoryId = cid;
                                    _this.SetActiveLink(_this.ShopCategoryData.List, _this.salePageCategoryId);
                                }
                            }
                        }
                    });
                    this.officaiService.GetOfficialPromotionTargetListPromise().then(null, null, function (result) {
                        _this.OfficialPromotionTargetList = result;
                        for (var i = 0; i <= result.length - 1; i++) {
                            var ConditionDiscountTypeDef = result[i].ConditionDiscountTypeDef;
                            if (result[i].Targets.length > 0)
                                if (ConditionDiscountTypeDef === "FreeGift") {
                                    for (var j = 0; j <= result[i].Targets.length - 1; j++) {
                                        _this.FreeGiftList.push(result[i].Targets[j]);
                                    }
                                }
                                else if (ConditionDiscountTypeDef === "DiscountPrice" || ConditionDiscountTypeDef === "DiscountRate") {
                                    for (var j = 0; j <= result[i].Targets.length - 1; j++) {
                                        _this.DiscountPriceList.push(result[i].Targets[j]);
                                    }
                                }
                        }
                    });
                }
                /**
                 highlight選單項目，根據當前頁面的分類
                 @method NineYi.Theme.Components#CategoryMenuController#SetActiveLink
                 @param {NineYi.WebStore.BE.ShopCategory.ShopCategoryForFrontendEntity[]}  shopCategoryDataList 參數說明
                 @returns {number} salePageCategoryId 參數說明
                 */
                CategoryMenuController.prototype.SetActiveLink = function (shopCategoryDataList, salePageCategoryId) {
                    if (salePageCategoryId) {
                        [].slice.call(shopCategoryDataList).forEach(function (level1) {
                            if (+level1.ShopCategory_Id === +salePageCategoryId) {
                                level1["active"] = true;
                                return;
                            }
                            if (level1.ChildList) {
                                [].slice.call(level1.ChildList).forEach(function (level2) {
                                    if (+level2.ShopCategory_Id === +salePageCategoryId) {
                                        level2["active"] = true;
                                        level1["selected"] = true;
                                        return;
                                    }
                                });
                            }
                        });
                    }
                };
                /**
                 我猜是找出第一層的方法?
                 @method NineYi.Theme.Components#CategoryMenuController#SelectLevel1List
                 @param {any}  level1 參數說明
                 @param {string} officialoriginDomain 參數說明
                 @returns {boolean} 回傳了一個boolean
                 */
                CategoryMenuController.prototype.SelectLevel1List = function (level1, officialoriginDomain) {
                    if (!level1.ChildList) {
                        this.$window.location.href = officialoriginDomain + '/v2/official/SalePageCategory/' + level1.ShopCategory_Id;
                    }
                    else {
                        level1.selected = !level1.selected;
                    }
                };
                /**
                 就是GA TrackEvent
                 @func NineYi.Theme.Components#CategoryMenuController#TrackEvent
                 @param {string}  Category Category參數說明
                 @param {string}  Action Action參數說明
                 @param {?string}  Label Label參數說明
                 @param {?number}  Value Value參數說明
                 @example  <caption> 寫個範例給大家瞧瞧:</caption>
                 {
                     name: "alfresco/html/Markdown",
                     config: {
                        markdown: "# H1\n## H2"
                     }
                 }
                 */
                CategoryMenuController.prototype.TrackEvent = function (Category, Action, Label, Value) {
                    this.googleAnalyticsUtility.TrackEvent(Category, Action, Label, Value);
                };
                CategoryMenuController.$inject = [
                    "$scope",
                    "$log",
                    "Mall.Value",
                    "$window",
                    "GoogleAnalyticsUtility",
                    "ShopCategoryService",
                    "OfficialService",
                    "SalePageCategoryId",
                    'UrlUtility'
                ];
                return CategoryMenuController;
            })();
            Components.CategoryMenuController = CategoryMenuController;
            angular.module("NineYi.Theme.Components")
                .controller("CategoryMenuController", CategoryMenuController);
        })(Components = Theme.Components || (Theme.Components = {}));
    })(Theme = NineYi.Theme || (NineYi.Theme = {}));
})(NineYi || (NineYi = {}));
//# sourceMappingURL=CategoryMenuController.js.map