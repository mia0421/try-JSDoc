/// <reference path="../../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../../Scripts/TypeLite.Net4.d.ts"/>

module NineYi.Theme.Components {

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
    export class CategoryMenuController {
        static $inject = [
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

        /**
         @member NineYi.Theme.Components#CategoryMenuController#templateUrl 裝置尺寸
         @type {string}
         @default ""
         */
        DeviceSize:string = "";

        /**
         @member NineYi.Theme.Components#CategoryMenuController#ShopCategoryData 商店分類清單
         @type {NineYi.WebStore.BE.ShopCategory.ShopCategoryDataForFrontendEntity}
         @default null
         */
        ShopCategoryData:NineYi.WebStore.BE.ShopCategory.ShopCategoryDataForFrontendEntity = null;

        /**
         @member NineYi.Theme.Components#CategoryMenuController#DiscountPriceList 包含折扣活動的分類清單
         @type {number[]}
         @default []
         */
        DiscountPriceList:number[] = [];

        /**
         @member NineYi.Theme.Components#CategoryMenuController#FreeGiftList 包含滿額贈活動的分類清單
         @type {number[]}
         @default []
         */
        FreeGiftList:number[] = [];

        /**
         @member NineYi.Theme.Components#CategoryMenuController#OfficialPromotionTargetList 活動Tag list
         @type {NineYi.WebStore.BE.Promotion.PromotionDetailForAPPEntity[]}
         @default []
         */
        OfficialPromotionTargetList:NineYi.WebStore.BE.Promotion.PromotionDetailForAPPEntity[] = [];

        constructor(private $scope:ng.IScope,
                    private $log:ng.ILogService,
                    private value:NineYi.Mall.Values.IValue,
                    private $window:ng.IWindowService,
                    private googleAnalyticsUtility:NineYi.Mall.Utilities.GoogleAnalyticsUtility,
                    private shopCategoryService:NineYi.Mall.Services.ShopCategoryService,
                    private officaiService:NineYi.Mall.Services.OfficialService,
                    private salePageCategoryId:number,
                    private UrlUtility:NineYi.Mall.Utilities.UrlUtility) {

            this.DeviceSize = this.value.deviceSize;
            this.shopCategoryService.GetShopCategoryListPromise().then(null, null, (result)=> {
                this.ShopCategoryData = result;
                if (this.ShopCategoryData) {

                    if(this.salePageCategoryId){
                        this.SetActiveLink(this.ShopCategoryData.List, this.salePageCategoryId);
                    }else{
                        // Query cid 側欄highlight來源的小分類頁
                        var cid = parseInt(this.UrlUtility.GetQuerystring('cid'));
                        if(cid){
                            this.salePageCategoryId = cid;
                            this.SetActiveLink(this.ShopCategoryData.List,this.salePageCategoryId);
                        }
                    }
                }
            });
            this.officaiService.GetOfficialPromotionTargetListPromise().then(null, null, (result)=> {
                this.OfficialPromotionTargetList = result;
                for (let i = 0; i <= result.length - 1; i++) {
                    let ConditionDiscountTypeDef = result[i].ConditionDiscountTypeDef;
                    if (result[i].Targets.length > 0)
                        if (ConditionDiscountTypeDef === "FreeGift") {
                            for (var j = 0; j <= result[i].Targets.length - 1; j++) {
                                this.FreeGiftList.push(result[i].Targets[j]);
                            }
                        }
                        else if (ConditionDiscountTypeDef === "DiscountPrice" || ConditionDiscountTypeDef === "DiscountRate") {
                            for (var j = 0; j <= result[i].Targets.length - 1; j++) {
                                this.DiscountPriceList.push(result[i].Targets[j]);
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
        SetActiveLink(shopCategoryDataList:NineYi.WebStore.BE.ShopCategory.ShopCategoryForFrontendEntity[], salePageCategoryId:number) {
            if (salePageCategoryId) {
                [].slice.call(shopCategoryDataList).forEach(
                    function (level1:NineYi.WebStore.BE.ShopCategory.ShopCategoryForFrontendEntity) {
                        if (+level1.ShopCategory_Id === +salePageCategoryId) {
                            level1["active"] = true;
                            return;
                        }
                        if (level1.ChildList) {
                            [].slice.call(level1.ChildList).forEach(
                                function (level2:NineYi.WebStore.BE.ShopCategory.ShopCategoryForFrontendEntity) {
                                    if (+level2.ShopCategory_Id === +salePageCategoryId) {
                                        level2["active"] = true;
                                        level1["selected"] = true;
                                        return;
                                    }
                                })
                        }

                    });
            }
        }

        /**
         我猜是找出第一層的方法?
         @method NineYi.Theme.Components#CategoryMenuController#SelectLevel1List
         @param {any}  level1 參數說明
         @param {string} officialoriginDomain 參數說明
         @returns {boolean} 回傳了一個boolean
         */
        SelectLevel1List(level1:any, officialoriginDomain:string) {
            if (!level1.ChildList) {
                this.$window.location.href = officialoriginDomain + '/v2/official/SalePageCategory/' + level1.ShopCategory_Id;
            } else {
                level1.selected = !level1.selected;
            }
        }

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
        TrackEvent(Category:string, Action:string, Label?:string, Value?:number) {
            this.googleAnalyticsUtility.TrackEvent(Category, Action, Label, Value);
        }

    }
    angular.module("NineYi.Theme.Components")
        .controller("CategoryMenuController", CategoryMenuController);

}
