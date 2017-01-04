/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/TypeLite.Net4.d.ts"/>

/**
 controller
 @namespace NineYi.Mall.Controllers
 */
module NineYi.Mall.Controllers {
    /**
     * 活動頁列表list controller
     * @class NineYi.Mall.Controllers#PromotionListController
     * @classdesc 活動頁列表list controller
     */
    export class PromotionListController {
        static $inject = [
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

        /**
         * 裝置尺寸
         * @member NineYi.Mall.Controllers#PromotionListController#PageSize
         * @type {string}
         * @default ""
         */
        public PageSize:number = "";

        /**
         * 目前顯示到第幾筆
         * @member NineYi.Mall.Controllers#PromotionListController#StartIndex
         * @type {number}
         * @default ""
         */
        public StartIndex:number = null;

        /**
         * 總筆數
         * @member NineYi.Mall.Controllers#PromotionListController#TotalCount
         * @type {number}
         * @default ""
         */
        public TotalCount:number = null;

        /**
         * 排序方式
         * @member NineYi.Mall.Controllers#PromotionListController#TotalCount
         * @type {string}
         * @desc
         * 1. 最新活動(Newest)
         * 2. 即將結束(ComingToEnd)
         * @default ""
         */
        public OrderBy:string = "";

        /**
         * 瀑布流directives參數
         * @member NineYi.Mall.Controllers#PromotionListController#EndlessIsLock
         * @type {boolean}
         * @default false
         */
        public EndlessIsLock:boolean = false;

        /**
         * 瀑布流directives參數
         * @member NineYi.Mall.Controllers#PromotionListController#EndlessScrollListener
         * @type {NineYi.Mall.Directives.IScrollListenerEntity}
         * @default null
         */
        public EndlessScrollListener:NineYi.Mall.Directives.IScrollListenerEntity = null;

        /**
         * 折扣活動列表
         * @member NineYi.Mall.Controller#PromotionListController#PromotionList
         * @type {NineYi.Mall.BE.PromotionListEntity[]}
         * @default []
         */
        public PromotionList:NineYi.Mall.BE.PromotionListEntity[] = [];

        /**
         * 是否為Mobile
         * @member NineYi.Mall.Controllers#PromotionListController#IsMobile
         * @type {boolean}
         * @default false
         */
        public IsMobile:boolean = false;

        /**
         * 是否為Loading狀態(用以判斷無折扣活動的情況)
         * @member NineYi.Mall.Controllers#PromotionListController#IsLoading
         * @type {boolean}
         * @default false
         */
        public IsLoading:boolean = false;

        /**
         * 倒數元件顯示條件＆格式
         * @member NineYi.Mall.Controllers#PromotionListController#ClockCondition
         * @type {any}
         * @default null
         */
        public ClockCondition:any = null;

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
        private PromotionConditionTypeV2Enum = NineYi.WebStore.Frontend.BE.Promotion.PromotionConditionTypeV2Enum;


        constructor(private $rootScope:ng.IRootScopeService,
                    private $scope:ng.IScope,
                    private $log:ng.ILogService,
                    private $window:ng.IWindowService,
                    private $filter:ng.IFilterService,
                    private $q:ng.IQService,
                    private DialogUtility:Utilities.DialogUtility,
                    private LoadingBarUtility:Utilities.LoadingBarUtility,
                    private GoogleAnalyticsUtility:Utilities.GoogleAnalyticsUtility,
                    private DeviceValue:Values.DeviceValue,
                    private PromotionV2Service:Services.PromotionV2Service,
                    private ShopId:number,
                    private PromotionListClass) {

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
        ChangeOrderBy(OrderByName:string):void {
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
        }

        /**
         * 瀑布流取得下50筆
         * @param {boolean} OrderByName 排序方式( 最新活動:Newest / 即將結束:ComingToEnd )
         * @constructor
         */
        GetNextPage():void {
            this.IsLoading = true;
            this.EndlessIsLock = true;

            //// 取得活動列表
            this.GetPromotionList(this.ShopId, this.OrderBy, this.StartIndex, this.PageSize)
                .then(()=> {
                    this.EndlessIsLock = false;
                    this.IsLoading = false;
                    //// 沒有資料要顯示了關閉瀑布流Directive
                    this.StartIndex += this.PageSize;
                    if (this.StartIndex >= this.TotalCount) {
                        this.StartIndex = -1;
                    }
                });
        }

        /**
         * 取得活動列表資料
         * @param {number} ShopId 商店ID
         * @param {string} OrderBy 排序方式
         * @param {number} StartIndex 起始筆數
         * @param {number} PageSize 共取幾筆
         * @constructor
         */
        GetPromotionList(ShopId:number, OrderBy:string, StartIndex:number, PageSize:number):ng.IPromise<void> {
            var defer = this.$q.defer<void>();

            this.LoadingBarUtility.ShowLoadingBar();
            this.PromotionV2Service.GetList(ShopId, OrderBy, StartIndex, PageSize)
                .then((result:NineYi.Mall.Models.ApiResultModel<NineYi.WebStore.Frontend.BE.Promotion.PromotionListResultEntity>)=> {
                    if (result.ReturnCode === 'API0001') {
                        this.TotalCount = result.Data.PromotionCount;
                        result.Data.PromotionList.map((Item:NineYi.WebStore.Frontend.BE.Promotion.PromotionV2ForDisplayEntity)=> {
                            var promotion = new this.PromotionListClass(Item);
                            if (promotion.isProcessing()) {
                                this.PromotionList.push(promotion);
                            }
                        });

                    } else {
                        this.$log.info('api GetPromotionList 活動列表 Error ' + result.Message);
                        this.DialogUtility.Notice(result.Message).then(()=> {
                            this.$window.location.href = '/';
                        });
                    }
                }, ()=> {
                    this.$log.info('api GetPromotionList 活動列表 Error ');
                    this.DialogUtility.Notice('無法順利連線, 請檢查網路狀況').then(()=> {
                        this.$window.location.href = '/';
                    });
                })
                .finally(()=> {
                    this.LoadingBarUtility.HideLoadingBar();
                    defer.resolve();

                });

            return defer.promise;
        }

        /**
         * 倒數計時時移除該活動
         * @param {Date} EndDateTime 活動結束時
         * @constructor
         */
        HidePromotion(EndDateTime:Date):void {
            var deleteIndex = 0;
            this.PromotionList.map((Item:NineYi.Mall.BE.PromotionListEntity, index)=> {
                if (Item.model.EndDateTime === EndDateTime) {
                    deleteIndex = index;
                }
            });
            this.PromotionList.splice(deleteIndex, 1);
        }

        /**
         * GA
         * @constructor
         */
        TrackEvent(Category:string, Action:string, Label?:string, Value?:number) {
            this.GoogleAnalyticsUtility.TrackEvent(Category, Action, Label, Value);
        }
    }
    angular.module('NineYi.Mall.Controllers')
        .controller('PromotionListController', PromotionListController);
}
