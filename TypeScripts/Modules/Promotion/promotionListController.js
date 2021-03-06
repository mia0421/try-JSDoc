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