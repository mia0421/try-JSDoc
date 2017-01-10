/// <reference path="../../typings/angularjs/angular.d.ts"/>
var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var Directives;
        (function (Directives) {
            /**
             * @class NineYi.Mall.Directives#nsBasket
             * @classdesc
             * ## 菜籃選單
             * 目前用於折扣活動明細頁
             *
             * @param {string} nsDiscountMessage 菜籃優惠提示訊息
             * @param {function} nsConfirmToShop 呼叫加入購物車後呼叫function
             * @param {IBasketSalePageEntity[]} nsSalepageList 已加入菜籃商品列表
             * @param {number} nsSalepageList.SalePageId 商品Id
             * @param {number} nsSalepageList.SaleProductSKUId 加入商品所選SKU Id
             * @param {string} nsSalepageList.Title  商品名稱
             * @param {string} nsSalepageList.SalePageImageUrl 商品圖片
             * @param {number} nsSalepageList.Price 原價
             * @param {number} nsSalepageList.SuggestPrice 建議售價
             * @param {boolean} nsSalepageList.IsSoldOut 是否賣完
             * @param {number} nsSalepageList.Qty 所選數量
             * @param {string} nsSalepageList.SkuLevel1 第一層所選sku
             * @param {string} nsSalepageList.SkuLevel2 第二層所選sku
             * @param {?boolean} nsSalepageList.IsNew 是否為新加入
             * @param {?boolean} nsSalepageList.IsRemove 是否被刪除
             *
             * @example
             * <caption>我是範例</caption>
             * <div ns-basket
             *      ns-discount-message="Ctrl.message"
             *      ns-salepage-list="Ctrl.salepageList"
             *      ns-confirm-to-shop="Ctrl.AddToCart()">
             * </div>
             */
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