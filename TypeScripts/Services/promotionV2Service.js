/// <reference path="../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../Scripts/TypeLite.Net4.d.ts"/>
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