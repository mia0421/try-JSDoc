/// <reference path="../../typings/angularjs/angular.d.ts"/>

/**
 Directives
 @namespace NineYi.Mall.Directives
 */
namespace NineYi.Mall.Directives {
    interface IBasketSalePageEntity {
        SalePageId: number;
        SaleProductSKUId: number;
        Title: string;
        SalePageImageUrl:string;
        Price:  number;
        SuggestPrice: number;
        IsSoldOut: boolean;
        Qty:  number;
        SkuLevel1:string;
        SkuLevel2: string;
        IsNew?:boolean;
        IsRemove?:boolean;
    }
    interface IDiscountMessage {
        ////已選優惠(滿額/滿件)
        PromotionConditionTitle: string;
        ////已折扣(折現/打折)
        PromotionDiscountTitle: string;
        ////還差多少可再享優惠
        RecommandConditionTitle:string;
    }
    interface IBasketDirectiveScope extends ng.IScope {
        //// 優惠訊息
        DiscountMessage:IDiscountMessage;

        //// 優惠訊息html
        DiscountMessageHtml:string;

        //// 第２層優惠訊息html
        DiscountSubMessageHtml:string;

        //// 已選購商品清單
        SalepageList:IBasketSalePageEntity[];

        //// 是否開啟菜籃
        IsOpen:boolean;

        //// 前往結帳
        ConfirmToShop: () => ng.IPromise<any>;

        //// 刪除商品
        RemoveItem: (SalePageId:number, SKUId:number) => void;

    }

    /**
     * @class NineYi.Mall.Directives#nsBasket
     * @classdesc
     * ## 菜籃選單
     * 目前用於折扣活動明細頁
     *
     * @param {string} nsDiscountMessage 菜籃優惠提示訊息
     * @param {function} nsConfirmToShop 呼叫加入購物車後呼叫function
     * @param {function} nsSalepageList 已加入菜籃商品列表
     *
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
    export class BasketDirective implements ng.IDirective {
        static factory() {
            var directive = ($log:ng.ILogService, $timeout:ng.ITimeoutService, $sce:ng.ISCEService, DeviceValue:Values.DeviceValue) =>
                new BasketDirective($log, $timeout, $sce, DeviceValue);
            directive.$inject = ['$log', '$timeout', '$sce', 'DeviceValue'];
            return directive;
        }

        public link:(scope:IBasketDirectiveScope, element:ng.IAugmentedJQuery, attr:ng.IAttributes) => void;
        public restrict = 'EA';
        public replace = true;
        public scope = {
            SalepageList: '=nsSalepageList',
            DiscountMessage: '=nsDiscountMessage',
            ConfirmToShop: '&nsConfirmToShop'
        };
        public templateUrl = '/V2/TypeScripts/Components/basket.html';

        constructor(private $log:ng.ILogService,
                    private $timeout:ng.ITimeoutService,
                    private $sce:ng.ISCEService,
                    private DeviceValue:Values.DeviceValue) {
            this.link = (scope:IBasketDirectiveScope, element:ng.IAugmentedJQuery, attr:ng.IAttributes)=> {
                scope.IsOpen = false;

                scope.$watch(()=>scope.DiscountMessage, (newVal, oldVal)=> {
                    if (newVal !== oldVal) {
                        function fetchSpecial(data) {
                            var result = /[優惠價|還差|再選|已選購] (\$[0-9]+|[0-9]+)/i.exec(data);
                            return result && result[1] || null;
                        }

                        //// 優惠金額
                        var DiscountNum = fetchSpecial(scope.DiscountMessage.PromotionDiscountTitle);
                        //// 已選金額或件數
                        var ConditionNum = fetchSpecial(scope.DiscountMessage.PromotionConditionTitle);

                        var DiscountHtml = scope.DiscountMessage.PromotionDiscountTitle.replace(DiscountNum, `<span class='basket-footer-highlight'>${DiscountNum}</span>`);

                        if (this.DeviceValue.BrowsingMode === NineYi.Mall.Models.BrowsingModeEnum.Mobile) {
                            //// Mobile無優惠提示
                            var ConditionHtml = scope.DiscountMessage.PromotionConditionTitle.replace(ConditionNum, `<b>${ConditionNum}</b>`);
                            scope.DiscountMessageHtml = this.$sce.trustAsHtml(DiscountHtml);
                            scope.DiscountSubMessageHtml = this.$sce.trustAsHtml(ConditionHtml);
                        } else {
                            var ConditionHtml = scope.DiscountMessage.PromotionConditionTitle.replace(ConditionNum, `<span class='basket-footer-highlight'>${ConditionNum}</span>`);
                            scope.DiscountMessageHtml = this.$sce.trustAsHtml(`${ConditionHtml}，${DiscountHtml}`);
                            scope.DiscountSubMessageHtml = this.$sce.trustAsHtml(scope.DiscountMessage.RecommandConditionTitle ==='' ? '&nbsp' : scope.DiscountMessage.RecommandConditionTitle);
                        }
                    }
                });
                //// watch SalepageList長度變化
                scope.$watchCollection(()=>scope.SalepageList, (newVal, oldVal)=> {
                    if (newVal.length > oldVal.length) {
                        //// Desktop版第一次加入要自動打開
                        if (newVal.length === 1 && this.DeviceValue.BrowsingMode !== NineYi.Mall.Models.BrowsingModeEnum.Mobile) {
                            scope.IsOpen = true;
                        }
                        //// 針對新加入的item，做淡入效果後移除動畫
                        var lastIndex = newVal.length-1;
                        newVal[lastIndex].IsNew = true;

                        this.$timeout(()=> {
                            newVal[lastIndex].IsNew = false;
                        },800);
                    }
                });
                scope.RemoveItem = (SalePageId:number, SKUId:number)=> {
                    var removeIndex;
                    for (let i = 0; i < scope.SalepageList.length; i++) {
                        if (scope.SalepageList[i].SalePageId === SalePageId && scope.SalepageList[i].SaleProductSKUId === SKUId) {
                            removeIndex = i;
                            // 加入淡出效果
                            scope.SalepageList[i].IsRemove = true;
                            break;
                        }
                    }
                    // 動畫淡出後，執行刪除
                    this.$timeout(()=> {

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
                    },600);

                }
            }
        }
    }
    angular.module('NineYi.Mall.Directives').directive('nsBasket', BasketDirective.factory());
}
