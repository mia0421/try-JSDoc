/// <reference path="Enums.ts" />

declare module NineYi.Mall.Models {
    interface ApiResultModel {
        ReturnCode:string;
        Data:T;
        Message:string
    }
}
declare module NineYi.Utility {
    interface EntityBase {
    }
}
declare module NineYi.WebStore.BE.Promotion {
    interface PromotionDetailForAPPEntity {
        CategoryId: number;
        CategoryName: string;
        Conditions: string[];
        Detail: string;
        DiscountPrice: number;
        DiscountRate: number;
        EndTime: Date;
        EndTimeText: string;
        FreeGifts: NineYi.WebStore.BE.Promotion.PromotionFreeGiftEntity[];
        IconURL: string;
        Id: number;
        LogoURL: string;
        MustBySalePageList: number[];
        PromotionConditionDiscountType: string;
        PromotionConditionType: string;
        PromotionDisplayName: string;
        PromotionString: string;
        PromotionTargetList: number[];
        PromotionTargetType: string;
        Rules: string[];
        ShopId: number;
        ShopName: string;
        StartTime: Date;
        StartTimeText: string;
        Title: string;
        TotalPrice: number;
        TotalQty: number;
    }
    interface PromotionForLinkEntity {
        EndTime: Date;
        Id: number;
        PromotionConditionDiscountType: string;
        PromotionConditionType: string;
        PromotionDisplayName: string;
        PromotionTargetType: string;
        StartTime: Date;
        Title: string;
    }
    interface PromotionFreeGiftEntity {
        Id: number;
        IsSoldOut: boolean;
        PicUrl: string;
        Price: number;
        PromotionConditionId: number;
        PromotionId: number;
        Qty: number;
        SalePageId: number;
        SaleProductSKUId: number;
        Title: string;
        TotalPrice: number;
        TotalQty: number;
    }
}
declare module NineYi.WebStore.BE.SalePage {
    interface SalePageTermEntity {
        SalePageTermText: string;
    }
}
declare module NineYi.WebStore.BE.Shop {
    interface ShopShippingDetailEntity {
        ColorCode: string;
        DisplayEndDateTime: Date;
        DisplayStartDateTime: Date;
        DisplayText: string[];
        ShippingProfileTypeDef: NineYi.WebStore.Frontend.BE.ShippingProfile.ShippingProfileTypeDefEnum;
        ShopShippingTypeId: number;
    }
}
declare module NineYi.WebStore.BE.ShopCategory {
    interface ShopCategoryDataForFrontendEntity {
        List: NineYi.WebStore.BE.ShopCategory.ShopCategoryForFrontendEntity[];
        TotalCount: number;
    }
    interface ShopCategoryForFrontendEntity {
        ChildList: NineYi.WebStore.BE.ShopCategory.ShopCategoryForFrontendEntity[];
        Count: number;
        ShopCategory_Id: number;
        ShopCategory_IsParent: boolean;
        ShopCategory_Level: number;
        ShopCategory_Name: string;
        ShopCategory_ParentId: number;
        ShopCategory_ParentName: string;
        ShopCategory_Sort: number;
    }
}
declare module NineYi.WebStore.BE.TraceSalePageList {
    interface TraceSalePageListDataEntity extends NineYi.Utility.EntityBase {
        Cid: number;
        DateTime: Date;
        HasSKU: boolean;
        IsFreeShippingFee: boolean;
        IsHasLowTemperature: boolean;
        IsHasPromotion: boolean;
        IsInstallment: boolean;
        IsStoreDelivery: boolean;
        IsZeroInstallmentRate: boolean;
        PicUrl: string;
        Price: number;
        SalePageId: number;
        ShopId: number;
        ShopLogoUrl: string;
        ShopName: string;
        SKUId: number;
        SuggestPrice: number;
        Title: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.Activity {
    interface ActivityListEntity {
        Activity_Id: string;
        Activity_Name: string;
        Activity_ShopId: string;
        Activity_ShopName: string;
        Activity_Url: string;
    }
    interface ActivityResultEntity {
        Data: any;
        Message: string;
        ReturnCode: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.BankMaster {
    interface BankMasterEntity {
        BankMaster_AccountLengthSet: string;
        BankMaster_BranchCode: string;
        BankMaster_BranchName: string;
        BankMaster_Code: string;
        BankMaster_Name: string;
        BankMaster_TypeDef: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.CancelRequestV2 {
    interface CancelConfirmEntity {
        Code: string;
        CustomerServiceInfo: string;
        HasActivity: boolean;
        HasMatchedCanCancelCount: boolean;
        Id: number;
        IsPartialCancelEnabled: boolean;
        IsShopCancelGoodsEnabled: boolean;
        PayInfo: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderGroupPayInfoForReverseFlowEntity;
        RefundInfo: NineYi.WebStore.Frontend.BE.RefundRequest.RefundDetailEntity;
        ShopId: number;
        TradesOrderList: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderForReverseFlowEntity[];
    }
}
declare module NineYi.WebStore.Frontend.BE.Category {
    interface ShowShopCategoryLevelNameEntity {
        Level1_ShopCategory_Id: number;
        Level1_ShopCategory_Name: string;
        Level2_ShopCategory_Id: number;
        Level2_ShopCategory_Name: string;
        Level3_ShopCategory_Id: number;
        Level3_ShopCategory_Name: string;
        ShopCategory_ShowId: number;
        ShopCategory_ShowName: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.ChangeGoodsRequestV2 {
    interface ChangeGoodsConfirmEntity {
        CauseDescription: string;
        Code: string;
        Description: string;
        HasActivity: boolean;
        Id: number;
        IsShopChangeGoodsEnabled: boolean;
        MemberLocationInfo: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberLocationForReverseFlowEntity;
        PayInfo: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderGroupPayInfoForReverseFlowEntity;
        PickupInfo: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderGroupShippingInfoForReverseFlowEntity;
        ShopId: number;
        TradesOrderList: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderForReverseFlowEntity[];
    }
}
declare module NineYi.WebStore.Frontend.BE.Coupon {
    interface CouponListEntity {
        CountLimit: string;
        Gallery: string;
        Id: number;
        Introduction: string;
        IsLimit: boolean;
        ShopName: string;
        StyleDiv: string;
        StyleHeader: string;
        StyleListlast: string;
        StyleTitle: string;
        Title: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.CrmMember {
    interface CrmMemberTierDailySummaryEntity {
        TradesSum: number;
        UpdatedDate: string;
    }
    interface CrmMemberTierDataEntity {
        DailySummary: NineYi.WebStore.Frontend.BE.CrmMember.CrmMemberTierDailySummaryEntity;
        EndDateTime: Date;
        MemberCardId: number;
        MemberCardImagePath: string;
        MemberCardLevel: number;
        MemberCardName: string;
        MemberId: number;
        ShopId: number;
        StartDateTime: Date;
    }
}
declare module NineYi.WebStore.Frontend.BE.CrmShopMemberCard {
    interface CrmMemberCardSettingEntity {
        Description: string;
    }
    interface CrmShopMemberCardDetailInfoEntity {
        Description: string;
        ExpireDay: number;
        Id: number;
        ImagePath: string;
        Level: number;
        Name: string;
        RenewConditionList: NineYi.WebStore.Frontend.BE.CrmShopMemberCard.RenewConditionEntity[];
        UpdatedDateTime: Date;
        UpgradeConditionList: NineYi.WebStore.Frontend.BE.CrmShopMemberCard.UpgradeConditionEntity[];
    }
    interface CrmShopMemberCardEntity {
        MemberCardList: NineYi.WebStore.Frontend.BE.CrmShopMemberCard.CrmShopMemberCardDetailInfoEntity[];
        MemberCardSetting: NineYi.WebStore.Frontend.BE.CrmShopMemberCard.CrmMemberCardSettingEntity;
    }
    interface RenewConditionEntity {
        Type: string;
        Value: number;
    }
    interface UpgradeConditionEntity {
        Type: string;
        UpgradeType: string;
        Value: number;
    }
}
declare module NineYi.WebStore.Frontend.BE.DefinitionV2 {
    interface DefinitionDropdownListItemEntity {
        Text: string;
        Value: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.ECoupon {
    interface ECouponActForFrontendEntity {
        ECouponList: NineYi.WebStore.Frontend.BE.ECoupon.ECouponEntity[];
        ShopId: number;
        ShopName: string;
    }
    interface ECouponEntity extends NineYi.Utility.EntityBase {
        Code: string;
        CouponTotalCount: number;
        Description: string;
        DiscountPrice: number;
        ECouponCountWarningText: string;
        EcouponWording: string;
        EndDateTime: Date;
        Id: number;
        ImgUrl: string;
        IsAppDrawOut: boolean;
        IsSingleCode: boolean;
        IsWebDrawOut: boolean;
        Name: string;
        PurposeDef: string;
        QtyLimit: number;
        ShopId: number;
        ShopName: string;
        StartDateTime: Date;
        TakeEndTimeWarningText: string;
        TotalGiftLimit: number;
        TotalQty: number;
        TypeDef: string;
        UsingEndDateTime: Date;
        UsingStartDateTime: Date;
    }
    interface ECouponSlaveEntity extends NineYi.Utility.EntityBase {
        Code: string;
        DiscountPrice: number;
        ECouponId: number;
        ECouponTypeDef: string;
        EndDateTime: Date;
        Id: number;
        isGift: boolean;
        IsMix: boolean;
        IsTake: boolean;
        IsUsing: boolean;
        MemberId: number;
        ShopId: number;
        StartDateTime: Date;
        StatusTypeDef: string;
        StatusUpdateDateTime: Date;
        TypeDef: string;
        UseEndTimeWarningText: string;
        UsingEndDateTime: Date;
        UsingStartDateTime: Date;
        WillAnnulRecently: boolean;
    }
    interface ECouponSlaveForFrontendEntity {
        ECouponList: NineYi.WebStore.Frontend.BE.ECoupon.ECouponSlaveEntity[];
        ShopId: number;
        ShopName: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.GoogleTagManager {
    interface GoogleConversion {
        Id: string;
        Label: string;
    }
    interface YahooTransactionCounter {
        Id: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.HotSaleRanking {
    interface HotSaleRankingEntity extends NineYi.Utility.EntityBase {
        HotSaleRanking_Id: number;
        HotSaleRanking_PeriodDef: string;
        HotSaleRanking_PicUrl: string;
        HotSaleRanking_Price: number;
        HotSaleRanking_Rank: number;
        HotSaleRanking_SalePageId: number;
        HotSaleRanking_SalePageTitle: string;
        HotSaleRanking_ShopId: number;
        HotSaleRanking_Source: string;
        HotSaleRanking_SuggestPrice: number;
        HotSaleRanking_TotalSaleQty: number;
        HotSaleRanking_UpdatedDateTime: Date;
    }
}
declare module NineYi.WebStore.Frontend.BE.InfoModule {
    interface InfoModuleEditorPickEntity {
        CoverImageUrl: string;
        FirmUrl: string;
        PubContentId: number;
        PublishedDate: Date;
        Subtitle: string;
        Title: string;
        Type: NineYi.WebStore.Frontend.BE.InfoModule.InfoModuleTypeEnum;
        Uuid: string;
    }
    interface InfoModuleEntity {
        ClipLink: string;
        DetailLink: string;
        InfoModuleType: NineYi.WebStore.Frontend.BE.InfoModule.InfoModuleTypeEnum;
        InfoModuleTypeDesc: string;
        MainPicFileName: string;
        MainPicURL: string;
        ModuleId: number;
        ModuleTitle: string;
        Order: number;
        YouTubeVideoId: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.Invoice {
    interface InvoiceaAndRefundPromptEntity {
        Prompt: string;
        SourceDef: string;
        SourceReceiptDef: string;
        TradesOrderCode: string;
        TradesOrderGroupCode: string;
        TradesOrderGroupId: number;
        TradesOrderId: number;
        TradesOrderSalePageGroupSeq: number;
        TradesOrderSalePageId: number;
        TradesOrderSlaveCode: string;
    }
    interface InvoiceInfoEntity {
        InvoiceAddress: string;
        InvoiceCity: string;
        InvoiceDistrict: string;
        InvoiceSource: string;
        InvoiceZipCode: string;
        IsUpdateAllInvoiceInfo: boolean;
        ReceiverName: string;
        TradesOrderCode: string;
        TradesOrderGroupId: number;
        TradesOrderSlaveCode: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.LayoutTemplateData {
    interface AdDisplayEntity {
        Act: string;
        Color: string;
        DisplayDef: string;
        Link: string;
        Order: number;
        PicHeight: number;
        PicturePath: NineYi.WebStore.Frontend.BE.LayoutTemplateData.ImageDisplayEntity;
        Price: number;
        SalePageId: number;
        SlaveTitle: string;
        SuggestPrice: number;
        TargetInfo: NineYi.WebStore.Frontend.BE.LayoutTemplateData.TargetDisplayEntity;
        Title: string;
    }
    interface AdEntity {
        Code: string;
        Data: NineYi.WebStore.Frontend.BE.LayoutTemplateData.AdDisplayEntity[];
    }
    interface ImageDisplayEntity {
        FullUrl: string;
        ImagePath: string;
        LastUpdatedTime: string;
        RootUrl: string;
    }
    interface TargetDisplayEntity {
        TargetAct: string;
        TargetId: string;
        TargetPosition: string;
        TargetProperty: string;
        TargetType: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.Location {
    interface AreaEntity {
        CityId: number;
        Id: number;
        Title: string;
        ZipCode: number;
    }
    interface CityAreaEntity {
        AreaList: NineYi.WebStore.Frontend.BE.Location.AreaEntity[];
        Domestic: number;
        Id: number;
        Title: string;
    }
    interface LocationForPickupEntity {
        Address: string;
        AreaId: number;
        CityId: number;
        CityName: string;
        Id: number;
        Latitude: string;
        Longitude: string;
        Name: string;
        NormalTime: string;
        OperationTime: string;
        Tel: string;
        TelPrepend: string;
        WeekendTime: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.LocationPickup {
    interface LocationPickupDetailEntity {
        ArrivedDateTime: Date;
        BarcodeFormat: string;
        DeviceAppMappingPlatformDef: string;
        LocationAddress: string;
        LocationName: string;
        MemberName: string;
        MemberPhone: string;
        OrderDateTime: Date;
        PickupCode: string;
        PickupDescription: string;
        PickupEndDateTime: Date;
        Qty: number;
        ReceiverName: string;
        ReceiverPhone: string;
        ShopLogoUrl: string;
        ShopName: string;
        Status: NineYi.WebStore.Frontend.BE.LocationPickup.LocationPickupShippingOrderStatusEnum;
        StatusDef: string;
        TemperatureTypeDef: string;
        TotalPayment: number;
        TradesOrderGroupCode: string;
        VerifyInfoList: NineYi.WebStore.Frontend.BE.LocationPickup.LocationPickupProfileVerifyInfoEntity[];
    }
    interface LocationPickupProfileVerifyInfoEntity {
        VerifyTypeDef: string;
        VerifyTypeDefDesc: string;
    }
    interface LocationPickupRequestEntity {
        PickupCode: string;
        ShopId: number;
        TradesOrderGroupCode: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.LoveCode {
    interface LoveCodeDisplayEntity {
        Code: string;
        SocialWelfareGroup: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.MemberInvoice {
    interface MemberInvoiceEntity {
        AddressDetail: string;
        CarrierCode: string;
        CarrierTypeDef: string;
        City: string;
        District: string;
        Id: number;
        InvoiceTypeDef: string;
        MemberId: number;
        PublicWelfareName: string;
        RegistrationNo: string;
        ShopId: number;
        Title: string;
        ZipCode: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.MemberLocation {
    interface MemberLocationEntity {
        AddressDetail: string;
        CellPhone: string;
        City: string;
        DeliveryTypeDef: string;
        District: string;
        FullName: string;
        Id: number;
        MemberId: number;
        ShippingProfileTypeDef: string;
        ShopId: number;
        StoreId: string;
        StoreName: string;
        ZipCode: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.MemberTradesOrder {
    interface MemberLocationForReverseFlowEntity {
        Address: string;
        CellPhone: string;
        City: string;
        District: string;
        FullName: string;
        ZipCode: string;
    }
    interface MemberTradesOrderContext {
        CleanCache: boolean;
        IsFinish: boolean;
        MaxCount: number;
        MemberId: number;
        ShopId: number;
        StartIndex: number;
        TradesOrderGroupList: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderGroupEntity[];
    }
    interface MemberTradesOrderEntity {
        Code: string;
        Id: number;
        PayProfileTypeDef: string;
        ShippingProfileTypeDef: string;
        TemperatureTypeDef: string;
        TradesOrderGroupId: number;
        TradesOrderReceiverStoreId: string;
        TradesOrderReceiverStoreName: string;
        TradesOrderSlaveList: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderSlaveEntity[];
    }
    interface MemberTradesOrderForDetailEntity {
        Code: string;
        ECouponId: number;
        FeeTypeDef: NineYi.WebStore.Frontend.BE.ShippingProfile.ShippingFeeTypeDefEnum;
        HasShippingFeeRefundInfo: boolean;
        Id: number;
        Memo: string;
        PayProfileTypeDef: string;
        ShippingFeeInvoiceFormatDef: string;
        ShippingFeeInvoicePrizeFlag: boolean;
        ShippingFeeInvoiceRequestDateTime: Date;
        ShippingFeeInvoiceSentDateTime: Date;
        ShippingFeeInvoiceStatus: NineYi.ERP.BE.Invoice.InvoiceStatusEnum;
        ShippingFeeInvoiceTypeDef: string;
        ShippingFeeRefundSource: string;
        ShippingFeeRefundStatus: string;
        ShippingProfileTypeDef: string;
        ShowShippingFeeInvoiceStatus: boolean;
        ShowShippingFeeRefundInfo: boolean;
        TemperatureTypeDef: string;
        TotalFee: number;
        TradesOrderFeeType: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderFeeTypeEnum;
        TradesOrderFeeTypeDef: string;
        TradesOrderGroupId: number;
        TradesOrderReceiverAddress: string;
        TradesOrderReceiverCity: string;
        TradesOrderReceiverDistrict: string;
        TradesOrderReceiverFullAddress: string;
        TradesOrderReceiverMobile: string;
        TradesOrderReceiverName: string;
        TradesOrderReceiverStoreId: string;
        TradesOrderReceiverStoreName: string;
        TradesOrderReceiverZipCode: string;
        TradesOrderSlaveList: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderSlaveForDetailEntity[];
    }
    interface MemberTradesOrderForReverseFlowEntity {
        Code: string;
        Id: number;
        TemperatureTypeDef: string;
        TotalFee: number;
        TradesOrderGroupId: number;
        TradesOrderSlaveList: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderSlaveForReverseFlowEntity[];
    }
    interface MemberTradesOrderForThirdPartyEntity {
        Freight: number;
        MarketName: string;
        OrderDateTime: Date;
        OrderList: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderSlaveForThirdPartyDetailEntity[];
        OrderMemo: string;
        OrderNumber: string;
        OrderType: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderForThirdPartyOrderTypeEnum;
        RefundAmount: number;
        TotalDiscount: number;
        TotalPayment: number;
    }
    interface MemberTradesOrderForThirdPartyResponseEntity {
        Data: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderForThirdPartyEntity;
        Message: string;
        Status: string;
    }
    interface MemberTradesOrderGroupEntity {
        CanCancel: boolean;
        CanChange: boolean;
        CanReturn: boolean;
        Code: string;
        DateTime: Date;
        HasInterest: boolean;
        Id: number;
        InstallmentDef: number;
        IsShopChangeGoodsEnabled: boolean;
        PayProfileTypeDef: string;
        PayProfileTypeDisplayName: string;
        ShippingProfileTypeDef: string;
        ShopId: number;
        TotalPayment: number;
        TradesOrderList: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderEntity[];
    }
    interface MemberTradesOrderGroupForDetailEntity {
        CanCancel: boolean;
        CanChange: boolean;
        CanReturn: boolean;
        CleanCache: boolean;
        Code: string;
        DateTime: Date;
        HasActivity: boolean;
        Id: number;
        IsShopChangeGoodsEnabled: boolean;
        Memo: string;
        PayInfo: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderGroupPayInfoForDetailEntity;
        ShippingInfo: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderGroupShippingInfoForDetailEntity;
        ShopId: number;
        TradesOrderList: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderForDetailEntity[];
    }
    interface MemberTradesOrderGroupPayInfoForDetailEntity {
        CreditCardBankName: string;
        ECouponDiscount: number;
        IsCreditCardPay: boolean;
        IsPaid: boolean;
        PayerName: string;
        PayProfileTypeDef: NineYi.WebStore.Frontend.BE.PayProfile.PayProfileTypeDefEnum;
        PromotionDiscount: number;
        TotalPayment: number;
    }
    interface MemberTradesOrderGroupPayInfoForReverseFlowEntity {
        CreditCardBankName: string;
        PayProfileTypeDef: NineYi.WebStore.Frontend.BE.PayProfile.PayProfileTypeDefEnum;
        PayProfileTypeDefDesc: string;
        TotalPayment: number;
    }
    interface MemberTradesOrderGroupShippingInfoForDetailEntity {
        ShippingProfileTypeDef: NineYi.WebStore.Frontend.BE.ShippingProfile.ShippingProfileTypeDefEnum;
        TradesOrderReceiverAddress: string;
        TradesOrderReceiverCity: string;
        TradesOrderReceiverDistrict: string;
        TradesOrderReceiverFullAddress: string;
        TradesOrderReceiverMobile: string;
        TradesOrderReceiverName: string;
        TradesOrderReceiverStoreName: string;
        TradesOrderReceiverZipCode: string;
    }
    interface MemberTradesOrderGroupShippingInfoForReverseFlowEntity {
        TradesOrderReceiverAddress: string;
        TradesOrderReceiverCity: string;
        TradesOrderReceiverDistrict: string;
        TradesOrderReceiverZipCode: string;
    }
    interface MemberTradesOrderSlaveBaseForDetailEntity {
        Code: string;
        ECouponDiscount: number;
        Id: number;
        IsGift: boolean;
        IsMajor: boolean;
        IsSalePageGift: boolean;
        PicUrl: string;
        Price: number;
        PromotionDiscount: number;
        Qty: number;
        SalePageGiftGroupSeq: number;
        SalePageGiftId: number;
        SalePageGroupSeq: number;
        SalePageId: number;
        SalePageUpdatedDateTime: Date;
        SaleProductTitle: string;
        TotalPayment: number;
        TradesOrderId: number;
    }
    interface MemberTradesOrderSlaveEntity {
        Code: string;
        FlowStatusMessageInfo: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderSlaveFlowStatusMessageInfoEntity;
        FlowType: string;
        HasRefundInfo: boolean;
        Id: number;
        IsGift: boolean;
        IsMajor: boolean;
        OrderSlaveFlowCanCancel: boolean;
        OrderSlaveFlowCancelOrderSlaveId: number;
        OrderSlaveFlowCancelOrderSlaveStatusUpdatedDateTime: Date;
        OrderSlaveFlowCanChange: boolean;
        OrderSlaveFlowCanReturn: boolean;
        OrderSlaveFlowChangeGoodsOrderSlaveStatusUpdatedDateTime: Date;
        OrderSlaveFlowChangeGoodsRequestStatusUpdatedDateTime: Date;
        OrderSlaveFlowCreditCheckStatusDef: string;
        OrderSlaveFlowCreditCheckStatusUpdatedDateTime: Date;
        OrderSlaveFlowIsCancelRequesting: boolean;
        OrderSlaveFlowReturnGoodsOrderSlaveId: number;
        OrderSlaveFlowReturnGoodsOrderSlaveStatusUpdatedDateTime: Date;
        OrderSlaveFlowReturnGoodsRequestStatusUpdatedDateTime: Date;
        OrderSlaveFlowSalesOrderSlaveExpectShippingDate: Date;
        OrderSlaveFlowShippingDateTime: Date;
        OrderSlaveFlowShippingOrderForwarderDef: string;
        OrderSlaveFlowShippingOrderSlaveDateTime: Date;
        OrderSlaveFlowShippingOrderSlaveEntryAccountingDateTime: Date;
        OrderSlaveFlowShippingOrderSlaveHandOverDateTime: Date;
        OrderSlaveFlowShippingOrderSlaveOuterCode: string;
        OrderSlaveFlowStatusForUserDef: string;
        OrderSlaveFlowUpdatedDateTime: Date;
        PicUrl: string;
        RefundSourceDef: string;
        RefundTypeDef: NineYi.ERP.BE.RefundRequest.RefundRequestTypeDefEnum;
        SalePageGroupSeq: number;
        SalePageId: number;
        SalePageUpdatedDateTime: Date;
        SaleProductTitle: string;
        ShippingDate: Date;
        ShippingOrderQueryUrl: string;
        ShippingProfileTypeDef: string;
        ShippingTypeDef: number;
        TemperatureTypeDef: string;
        TotalPayment: number;
        TradesOrderId: number;
        TradesOrderSlaveProgressBarInfo: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderSlaveProgressBarInfoEntity;
    }
    interface MemberTradesOrderSlaveFlowStatusMessageInfoEntity {
        MainMessage: string;
        SubMessage: string;
    }
    interface MemberTradesOrderSlaveForDetailEntity extends NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderSlaveBaseForDetailEntity {
        CanUpdateInvoiceRequestDateTime: boolean;
        FlowStatusMessageInfo: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderSlaveFlowStatusMessageInfoEntity;
        FlowType: string;
        FormatDef: string;
        HasPromotion: boolean;
        HasRefundInfo: boolean;
        HasSnapshot: boolean;
        InvoicePrizeFlag: boolean;
        InvoiceRequestDateTime: Date;
        InvoiceSentDateTime: Date;
        InvoiceStatus: NineYi.ERP.BE.Invoice.InvoiceStatusEnum;
        IsIssuedInvoice: boolean;
        OrderSlaveFlowCanCancel: boolean;
        OrderSlaveFlowCancelOrderSlaveId: number;
        OrderSlaveFlowCancelOrderSlaveStatusUpdatedDateTime: Date;
        OrderSlaveFlowCanChange: boolean;
        OrderSlaveFlowCanReturn: boolean;
        OrderSlaveFlowChangeGoodsOrderSlaveStatusUpdatedDateTime: Date;
        OrderSlaveFlowChangeGoodsRequestStatusUpdatedDateTime: Date;
        OrderSlaveFlowCreditCheckStatusUpdatedDateTime: Date;
        OrderSlaveFlowIsAuthorized: boolean;
        OrderSlaveFlowIsCancelRequesting: boolean;
        OrderSlaveFlowPartialReturnFlag: boolean;
        OrderSlaveFlowReturnGoodsOrderSlaveId: number;
        OrderSlaveFlowReturnGoodsOrderSlaveStatusUpdatedDateTime: Date;
        OrderSlaveFlowReturnGoodsRequestStatusUpdatedDateTime: Date;
        OrderSlaveFlowSalesOrderSlaveExpectShippingDate: Date;
        OrderSlaveFlowShippingDateTime: Date;
        OrderSlaveFlowShippingOrderForwarderDef: string;
        OrderSlaveFlowShippingOrderSlaveDateTime: Date;
        OrderSlaveFlowShippingOrderSlaveEntryAccountingDateTime: Date;
        OrderSlaveFlowShippingOrderSlaveHandOverDateTime: Date;
        OrderSlaveFlowShippingOrderSlaveOuterCode: string;
        OrderSlaveFlowStatusForUser: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderOrderSlaveFlowStatusForUserEnum;
        OrderSlaveFlowStatusForUserDef: string;
        OrderSlaveFlowUpdatedDateTime: Date;
        RefundSource: string;
        SalePageGiftList: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderSlaveSalePageGiftForDetailEntity[];
        SaleProductSKUForDisplay: string;
        ShippingDate: Date;
        ShippingProfileTypeDef: string;
        ShippingType: NineYi.WebStore.Frontend.BE.SalePage.SaleProductShippingTypeEnum;
        ShippingTypeDef: number;
        ShopId: number;
        ShopShippingTypeId: number;
        ShowInvoiceStatus: boolean;
        ShowRefundInfo: boolean;
        SnapShopUrl: string;
        TemperatureType: NineYi.WebStore.Frontend.BE.SalePage.SaleProductTemperatureTypeEnum;
        TemperatureTypeDef: string;
        TradesOrderGroupCode: string;
        TypeDef: string;
    }
    interface MemberTradesOrderSlaveForReverseFlowEntity extends NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderSlaveBaseForDetailEntity {
        CauseDef: string;
        DefaultEnabled: boolean;
        DefaultSelected: boolean;
        HasPartialReturn: boolean;
        HasPromotion: boolean;
        IsIssuedInvoice: boolean;
        OrderSlaveFlowCanCancel: boolean;
        OrderSlaveFlowCancelOrderSlaveId: number;
        OrderSlaveFlowCanChange: boolean;
        OrderSlaveFlowCanReturn: boolean;
        OrderSlaveFlowIsCancelRequesting: boolean;
        OrderSlaveFlowPartialReturnFlag: boolean;
        OrderSlaveFlowReturnGoodsOrderSlaveId: number;
        OrderSlaveFlowStatusForUser: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderOrderSlaveFlowStatusForUserEnum;
        OrderSlaveFlowStatusForUserDef: string;
        SalePageGiftList: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderSlaveSalePageGiftForDetailEntity[];
        SaleProductSKUForDisplay: string;
        TemperatureType: NineYi.WebStore.Frontend.BE.SalePage.SaleProductTemperatureTypeEnum;
        TemperatureTypeDef: string;
    }
    interface MemberTradesOrderSlaveForThirdPartyDetailEntity {
        OrderStatus: string;
        ProductList: NineYi.WebStore.Frontend.BE.SalePage.SalePageForThirdPartyDetailEntity[];
        ShippingDate: Date;
        ShippingNumber: string;
        ShippingType: string;
        SystemOrderNumber: string;
    }
    interface MemberTradesOrderSlaveInvoiceForDetailEntity {
        Address: string;
        CarrierCode: string;
        CarrierTypeDef: string;
        CarrierTypeDefDesc: string;
        City: string;
        Country: string;
        DateTime: Date;
        District: string;
        DonateFlag: boolean;
        FormatDef: NineYi.WebStore.Frontend.BE.Invoice.InvoiceFormatTypeDefEnum;
        FormatDefDesc: string;
        FullAddress: string;
        InvoiceNo: string;
        Number: string;
        Prefix: string;
        Price: number;
        PrintDateTime: Date;
        Prize: number;
        PrizeFlag: boolean;
        Qty: number;
        RandomCode: string;
        RealFullAddress: string;
        RealReceiverName: string;
        ReceiverName: string;
        RegistrationNumber: string;
        RequestDateTime: Date;
        SaleProductTitle: string;
        SentDateTime: Date;
        ShopId: number;
        SourceDef: string;
        State: string;
        Status: NineYi.ERP.BE.Invoice.InvoiceStatusEnum;
        TemperatureTypeDef: string;
        Title: string;
        TotalPayment: number;
        TradesOrderSlaveCode: string;
        TradesOrderSlaveId: number;
        TypeDef: NineYi.WebStore.Frontend.BE.Invoice.InvoiceTypeDefEnum;
        TypeDefDesc: string;
        ZipCode: string;
    }
    interface MemberTradesOrderSlaveProgressBarEntity {
        DisplaySort: number;
        FlowTypeDef: string;
        Id: number;
        PayProfileTypeDef: string;
        ShippingProfileTypeDef: string;
        StatusDef: string;
        StatusDefDesc: string;
    }
    interface MemberTradesOrderSlaveProgressBarInfoEntity {
        CurrentStatusDateTime: Date;
        CurrentStatusDef: string;
        CurrentStatusMessage: string;
        CurrentStatusQueryUrl: string;
        DisplayProgressBarList: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderSlaveProgressBarEntity[];
        IsVisibled: boolean;
    }
    interface MemberTradesOrderSlaveRefundForDetailEntity extends NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderSlaveBaseForDetailEntity {
        FlowStatusMessageInfo: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderSlaveFlowStatusMessageInfoEntity;
        FlowType: string;
        PayInfo: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderGroupPayInfoForReverseFlowEntity;
        RefundInfo: NineYi.WebStore.Frontend.BE.RefundRequest.RefundDetailEntity;
        SaleProductSKUForDisplay: string;
        TemperatureTypeDef: string;
        TradesOrderGroupCode: string;
    }
    interface MemberTradesOrderSlaveSalePageGiftForDetailEntity {
        Code: string;
        Id: number;
        PicUrl: string;
        Qty: number;
        SalePageGroupSeq: number;
        SalePageId: number;
        SalePageUpdatedDateTime: Date;
        SaleProductTitle: string;
        TradesOrderId: number;
    }
}
declare module NineYi.WebStore.Frontend.BE.Official {
    interface OfficialShopInfoEntity {
        AppDownloadUrl: string;
        BingVerificationMeta: string;
        BrandStory: string;
        EnablePageNotFoundUrlRewriteMap: boolean;
        EnableSendAppLinkSMS: boolean;
        EnableTheme: boolean;
        FanGroupUrl: string;
        Favicon: string;
        FaviconUrl: string;
        FbAppId: string;
        FbAppSecret: string;
        FbCustomAudiencesPixelIds: string[];
        FbLoginUrl: string;
        FBMessengerWorkingEndTime: string;
        FBMessengerWorkingEndWeekDay: number;
        FBMessengerWorkingStartTime: string;
        FBMessengerWorkingStartWeekDay: number;
        GoogleAnalyticsTrackingId: string;
        GoogleConversionList: NineYi.WebStore.Frontend.BE.GoogleTagManager.GoogleConversion[];
        GTMContainerId: string;
        HasApp: boolean;
        HasBrandStory: boolean;
        HasShopSummary: boolean;
        HeaderStyleDef: NineYi.WebStore.Frontend.BE.Shop.ShopHeaderStyleDefEnum;
        Id: number;
        IOSAppId: string;
        IsEnableFBMessenger: boolean;
        IsEnableFBMessengerNonWorkingTime: boolean;
        IsIssuedInvoice: boolean;
        IsThirdpartyAuthMember: boolean;
        Logo: string;
        LogoUrl: string;
        MetaDescription: string;
        MetaKeywords: string;
        Note: string;
        OfficialShopRetireUrlTypeDef: NineYi.WebStore.Frontend.BE.Official.OfficialShopTypeDefEnum;
        OfficialShopStatusDef: NineYi.WebStore.Frontend.BE.Official.OfficialShopStatusDefEnum;
        OfficialShopTypeDef: NineYi.WebStore.Frontend.BE.Official.OfficialShopTypeDefEnum;
        OnlineCRM: string;
        OnlineCRMCode: string;
        OnlineCRMInfo: string;
        PageTitle: string;
        PhoneCRM: string;
        PhoneCRMExt: string;
        PhoneCRMInfo: string;
        ResponsibleCRM: string;
        RetireUrl: string;
        Rowversion: number[];
        ShopId: number;
        ShopImageUrl: string;
        ShopName: string;
        ShopTypeDef: NineYi.WebStore.Frontend.BE.Shop.ShopTypeDefEnum;
        StartDate: Date;
        StatusDef: string;
        SupplierId: number;
        SupplierName: string;
        ThirdpartyAuthButtonContent: string;
        ThirdpartyAuthIconUrl: string;
        ThirdpartyAuthTypeDef: string;
        UpdatedDateTime: Date;
        Url: string;
        YahooTransactionCounterList: NineYi.WebStore.Frontend.BE.GoogleTagManager.YahooTransactionCounter[];
    }
}
declare module NineYi.WebStore.Frontend.BE.PayProcess {
    interface ActivityCodeEntity {
        Act: string;
        Fr: string;
        Fr2: string;
    }
    interface PayProcessContextEntity {
        ActivityCode: NineYi.WebStore.Frontend.BE.PayProcess.ActivityCodeEntity;
        CacheTypeName: string;
        CreditCardInfo: NineYi.WebStore.Frontend.BE.PayProcess.PayProcessCreditCardEntity;
        CreditCheckInfo: NineYi.WebStore.Frontend.BE.PayProcess.PayProcessCreditCheckEntity;
        DeliveryTypeDef: string;
        Email: string;
        HasCreditCard: boolean;
        HasLowTemperatureDeliverySaleProduct: boolean;
        HasMemberInvoice: boolean;
        HasReceiver: boolean;
        InstallmentDef: number;
        IsEmailRequired: boolean;
        IsEnableEDM: boolean;
        IsFamilyTemperatureElectronicMapEnabled: boolean;
        IsFinish: boolean;
        IsNeedCreditCheck: boolean;
        IsTradesOrderMemo: boolean;
        MemberId: string;
        MemberInvoice: NineYi.WebStore.Frontend.BE.MemberInvoice.MemberInvoiceEntity;
        PayProcessFlowType: NineYi.WebStore.Frontend.BE.PayProcess.PayProcessFlowTypeEnum;
        PayProfileType: NineYi.WebStore.Frontend.BE.PayProfile.PayProfileTypeDefEnum;
        PayType: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartPayTypeEnum;
        Receiver: NineYi.WebStore.Frontend.BE.MemberLocation.MemberLocationEntity;
        RememberCreditCardNo: boolean;
        ShippingProfileType: NineYi.WebStore.Frontend.BE.ShippingProfile.ShippingProfileTypeDefEnum;
        ShopInfo: NineYi.WebStore.Frontend.BE.PayProcess.PayProcessShopInfoEntity;
        ShoppingCart: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartClientShopEntity;
        ShoppingCartMajorSalePageCount: number;
        ShoppingCartV2: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientEntity;
        ShoppingCartVersion: string;
        TemperatureDeliveryTicketList: NineYi.WebStore.Frontend.BE.TemperatureDeliveryTicket.TemperatureDeliveryTicketForPayProcessEntity[];
        TemperatureTypeDef: string;
        TradesOrderGroup: NineYi.WebStore.Frontend.BE.TradesOrder.TradesOrderGroupEntity;
        Type: NineYi.WebStore.Frontend.BE.PayProcess.PayProcessTypeEnum;
        UniqueKey: string;
        UseMemberInvoice: boolean;
        UserMemo: string;
        VerifySignature: boolean;
    }
    interface PayProcessCreditCardEntity {
        CreditCardCVV: string;
        CreditCardDate: string;
        CreditCardNo: string;
    }
    interface PayProcessCreditCheckEntity {
        AddressDetail: string;
        Birthday: string;
        CellPhone: string;
        City: string;
        District: string;
        FullName: string;
        IdentifyNo: string;
        ZipCode: string;
    }
    interface PayProcessShopInfoEntity {
        IsCompanyManagementTypeDef: boolean;
        IsIssuedInvoice: boolean;
        ManagementTypeDef: string;
        ShopTypeDef: NineYi.WebStore.Frontend.BE.Shop.ShopTypeDefEnum;
    }
    interface PayProcessTicketEntity {
        CreatedDatetime: Date;
        MachineName: string;
        ProcessKey: string;
        Status: NineYi.WebStore.Frontend.BE.PayProcess.PayProcessTicketStatusEnum;
        UpdatedDatetime: Date;
        UserId: number;
    }
}
declare module NineYi.WebStore.Frontend.BE.PayShippingMapping {
    interface PayShippingMappingEntity {
        PayProfileTypeDef: string;
        ShippingProfileTypeDef: string;
        StatisticsTypeDef: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.ProductStock {
    interface ProductStockEntity {
        GoodsSKUId: number;
        SaleProductSKUId: number;
        SellingQty: number;
    }
}
declare module NineYi.WebStore.Frontend.BE.Promotion {
    interface OfficialPromotionEntity {
        EndTime: Date;
        HotSaleRankings: NineYi.WebStore.Frontend.BE.HotSaleRanking.HotSaleRankingEntity[];
        IconUrl: string;
        Id: number;
        Promotion_DiscountTypeDef: string;
        Promotion_TypeDef: string;
        PromotionDisplayName: string;
        StartTime: Date;
        Title: string;
    }
    interface PromotionConditionV2ForDisplayEntity {
        DiscountPrice: number;
        DiscountRate: number;
        DiscountTypeDef: NineYi.WebStore.Frontend.BE.Promotion.PromotionConditionDiscountTypeV2Enum;
        Id: number;
        TotalPrice: number;
        TotalQty: number;
        TypeDef: NineYi.WebStore.Frontend.BE.Promotion.PromotionConditionTypeV2Enum;
    }
    interface PromotionDetailDiscountClientEntity {
        PromotionConditionTitle: string;
        PromotionDiscount: number;
        PromotionDiscountTitle: string;
        PromotionId: number;
        RecommandConditionTitle: string;
        SalePageList: NineYi.WebStore.Frontend.BE.Promotion.PromotionDetailDiscountSalePageClientEntity[];
        ShopId: number;
        TotalPrice: number;
        TotalQty: number;
    }
    interface PromotionDetailDiscountSalePageClientEntity {
        Price: number;
        Qty: number;
        SalePageId: number;
        SaleProductSKUId: number;
    }
    interface PromotionDetailV2ForDisplayEntity {
        CategoryList: NineYi.WebStore.Frontend.BE.Promotion.PromotionSalePageCategoryEntity[];
        ConditionList: NineYi.WebStore.Frontend.BE.Promotion.PromotionConditionV2ForDisplayEntity[];
        Description: string;
        DiscountTypeDef: NineYi.WebStore.Frontend.BE.Promotion.PromotionConditionDiscountTypeV2Enum;
        EndDateTime: Date;
        HasExcludedSalePage: boolean;
        HasPromotionImage: boolean;
        Name: string;
        PromotionGiftList: NineYi.WebStore.Frontend.BE.Promotion.PromotionTargetImageEntity[];
        PromotionId: number;
        PromotionImageUrl: string;
        ShopId: number;
        StartDateTime: Date;
        TargetTypeDef: NineYi.WebStore.Frontend.BE.Promotion.PromotionTargetTypeV2Enum;
        TotalSalePageCountForAllCategory: number;
        TypeDef: NineYi.WebStore.Frontend.BE.Promotion.PromotionConditionTypeV2Enum;
        UpdatedDateTime: Date;
    }
    interface PromotionFreeGiftEntity {
        Id: number;
        IsSoldOut: boolean;
        PicUrl: string;
        Price: number;
        PromotionConditionId: number;
        PromotionId: number;
        Qty: number;
        SalePageId: number;
        SaleProductSKUId: number;
        Title: string;
        TotalPrice: number;
        TotalQty: number;
    }
    interface PromotionListResultEntity {
        PromotionCount: number;
        PromotionList: NineYi.WebStore.Frontend.BE.Promotion.PromotionV2ForDisplayEntity[];
    }
    interface PromotionSalePageCategoryEntity {
        CategoryId: number;
        ChildList: NineYi.WebStore.Frontend.BE.Promotion.PromotionSalePageCategoryEntity[];
        IsParent: boolean;
        Level: number;
        ParentId: number;
        SalePageCount: number;
        Sort: number;
        Title: string;
    }
    interface PromotionSalePageEntity {
        IsAppOnly: boolean;
        IsSoldOut: boolean;
        Price: number;
        Rank: number;
        SalePageId: number;
        SalePageImageUrl: string;
        SellingQty: number;
        SuggestPrice: number;
        Title: string;
        UpdatedDateTime: Date;
    }
    interface PromotionSalePageListResultEntity {
        SalePageList: NineYi.WebStore.Frontend.BE.Promotion.PromotionSalePageEntity[];
    }
    interface PromotionTargetImageEntity {
        PromotionHotSaleRankingUpdatedDateTime: Date;
        PromotionId: number;
        Rank: number;
        SalePageId: number;
        SalePageImageUrl: string;
    }
    interface PromotionV2ForDisplayEntity {
        DiscountTypeDef: NineYi.WebStore.Frontend.BE.Promotion.PromotionConditionDiscountTypeV2Enum;
        EndDateTime: Date;
        Name: string;
        PromotionId: number;
        SalePageList: NineYi.WebStore.Frontend.BE.Promotion.PromotionTargetImageEntity[];
        StartDateTime: Date;
        TargetTypeDef: NineYi.WebStore.Frontend.BE.Promotion.PromotionTargetTypeV2Enum;
        TypeDef: NineYi.WebStore.Frontend.BE.Promotion.PromotionConditionTypeV2Enum;
        UpdatedDateTime: Date;
    }
    interface SalePagePromotionDetailEntity {
        DiscountPrice: number;
        EnableCalculate: boolean;
        Price: number;
        PromotionConditionId: number;
        PromotionId: number;
        SalePageId: number;
        SalePageIndex: number;
        SaleProductSKUId: number;
    }
}
declare module NineYi.WebStore.Frontend.BE.RefundRequest {
    interface RefundDetailEntity {
        Amount: number;
        BankAccountNo: string;
        BankAccountOwner: string;
        BankName: string;
        BankSubName: string;
        RealBankAccountNo: string;
        RefundStatusDef: string;
        SourceDef: NineYi.ERP.BE.RefundRequest.RefundRequestSourceDefEnum;
        TradesOrderSlaveCode: string;
        TypeDef: NineYi.ERP.BE.RefundRequest.RefundRequestTypeDefEnum;
    }
    interface RefundInfoEntity {
        BankAccountNo: string;
        BankAccountOwner: string;
        BankName: string;
        BankSubName: string;
        SourceDef: string;
        TradesOrderCode: string;
        TradesOrderSlaveCode: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.ReturnGoodsRequestV2 {
    interface ReturnGoodsConfirmEntity {
        CauseDescription: string;
        Code: string;
        Description: string;
        HasActivity: boolean;
        HasMatchedCanReturnCount: boolean;
        Id: number;
        IsAgreedToDelegate: boolean;
        IsPartialReturnGoodsEnabled: boolean;
        MemberLocationInfo: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberLocationForReverseFlowEntity;
        PayInfo: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderGroupPayInfoForReverseFlowEntity;
        PickupInfo: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderGroupShippingInfoForReverseFlowEntity;
        RefundInfo: NineYi.WebStore.Frontend.BE.RefundRequest.RefundDetailEntity;
        ShopId: number;
        TradesOrderList: NineYi.WebStore.Frontend.BE.MemberTradesOrder.MemberTradesOrderForReverseFlowEntity[];
    }
}
declare module NineYi.WebStore.Frontend.BE.SalePage {
    interface NotKeyPropertyEntity {
        ContentList: string[];
        Title: string;
    }
    interface SalePageEntity {
        CategoryId: number;
        CategoryText: string;
        CreateDateTime: Date;
        DeliverTypeList: string[];
        DeliverTypeSet: string;
        ECoupons: NineYi.WebStore.Frontend.BE.ECoupon.ECouponActForFrontendEntity[];
        ExtraList: NineYi.WebStore.Frontend.BE.SalePage.SaleProductSKUEntity[];
        GiftList: NineYi.WebStore.Frontend.BE.SalePage.SaleProductSKUEntity[];
        GoodsSKUIdList: number[];
        HasMoreInfo: boolean;
        HasSKU: boolean;
        Id: number;
        ImageCount: number;
        ImageList: NineYi.WebStore.Frontend.BE.SalePage.SalePageImageEntity[];
        InstallmentList: NineYi.WebStore.Frontend.BE.Shop.ShopInstallmentEntity[];
        IsAPPOnly: boolean;
        IsDisplayExcludeECouponDiscount: boolean;
        IsExcludeECouponDiscount: boolean;
        IsLimit: boolean;
        IsShareToBuy: boolean;
        IsShowSoldQty: boolean;
        IsShowTradesOrderList: boolean;
        MajorList: NineYi.WebStore.Frontend.BE.SalePage.SaleProductEntity[];
        MajorSKUIdList: number[];
        NextSalePageId: number;
        NotKeyPropertyList: NineYi.WebStore.Frontend.BE.SalePage.NotKeyPropertyEntity[];
        OptionalGiftCount: number;
        OptionalGiftList: NineYi.WebStore.Frontend.BE.SalePage.SaleProductSKUEntity[];
        PayProfileTypeDefList: string[];
        PayTypeDefList: string[];
        PayTypeList: string[];
        PrevSalePageId: number;
        Price: number;
        Promotions: NineYi.WebStore.BE.Promotion.PromotionForLinkEntity[];
        RangeDef: number;
        SalePageCreateDateTime: Date;
        SalePageGiftList: NineYi.WebStore.Frontend.BE.SalePage.SalePageGiftEntity[];
        SaleProductSKUIdList: number[];
        SellingStartDateTime: Date;
        ServiceInfoList: string[];
        ShippingTypeList: NineYi.WebStore.Frontend.BE.SalePage.SalePageShippingTypeEntity[];
        ShopCategoryId: number;
        ShopIcon: string;
        ShopId: number;
        ShopName: string;
        ShortDescription: string;
        SKUPropertySetList: NineYi.WebStore.Frontend.BE.SalePage.SKUPropertySetEntity[];
        SoldQty: number;
        Sort: number;
        StatusDef: string;
        SubDescript: string;
        SubTitle: string;
        SuggestPrice: number;
        Title: string;
        TradesOrderListUri: NineYi.WebStore.Frontend.BE.TradesOrder.TradesOrderListUriEntity;
        UpdatedDateTime: Date;
        WebSiteDefSet: string;
    }
    interface SalePageForCategoryEntity {
        ImageCount: number;
        IsFav: boolean;
        IsFreeFee: boolean;
        IsHasLowTemperature: boolean;
        IsHasPromotion: boolean;
        IsHasStoreDelivery: boolean;
        IsInstallment: boolean;
        IsZeroInstallmentRate: boolean;
        PicList: string[];
        PicUrl: string;
        Price: number;
        PV: number;
        SalePageId: number;
        SellingStartDateTime: Date;
        ShopId: number;
        Sort: number;
        SubTitle: string;
        SuggestPrice: number;
        Tags: NineYi.WebStore.Frontend.BE.SalePageCategory.CategoryTagEntity[];
        Title: string;
        UpdatedDateTime: Date;
        WebSiteDefSet: string;
    }
    interface SalePageForRecommendEntity {
        IsFav: boolean;
        PicUrl: string;
        Price: number;
        SalePageId: number;
        ShopId: number;
        Title: string;
    }
    interface SalePageForThirdPartyDetailEntity {
        Color: string;
        NO: number;
        OutNumber: string;
        ProductName: string;
        ProductNumber: string;
        ProductStatus: string;
        Qty: string;
        Size: string;
        Spec: string;
        Subtotal: string;
        UnitPrice: string;
    }
    interface SalePageGiftEntity {
        PicUrl: string;
        SalePageGiftId: number;
        SalePageGiftSlaveId: number;
        SalePageId: number;
        SaleProductSKUId: number;
        SellingQty: number;
        Title: string;
        UpdatedDateTime: Date;
    }
    interface SalePageGiftForDisplayEntity {
        SalePageGiftId: number;
        Title: string;
    }
    interface SalePageImageEntity {
        Id: number;
        Index: number;
        PicUrl: string;
        Seq: number;
        SKUPropertyNameSet: string;
        Type: string;
        UpdatedDateTime: Date;
        Url: string;
    }
    interface SalePagePriceEntity {
        Price: number;
        SuggestPrice: number;
    }
    interface SalePageShippingTypeEntity {
        DisplayString: string;
        Fee: number;
        FeeTypeDef: string;
        FeeTypeDefDesc: string;
        Id: number;
        IsDefault: boolean;
        IsEnabled: boolean;
        OverPrice: number;
        ShippingProfileTypeDef: string;
        ShippingTypeDef: string;
        ShopId: number;
        SupplierId: number;
        TemperatureTypeDef: string;
        TypeName: string;
    }
    interface SaleProductEntity {
        Height: number;
        Length: number;
        Price: number;
        SaleProductId: number;
        ShippingDate: Date;
        ShippingEndDate: Date;
        ShippingTypeDef: number;
        ShippingTypeDefDesc: string;
        ShippingWaitingDays: number;
        SKUList: NineYi.WebStore.Frontend.BE.SalePage.SKUEntity[];
        TemperatureTypeDef: string;
        Title: string;
        Weight: number;
        Width: number;
    }
    interface SaleProductSKUEntity {
        GoodsSKUId: number;
        Price: number;
        SaleProductSKUId: number;
        Title: string;
    }
    interface SKUEntity {
        DisplayPropertyName: string;
        PropertyList: NineYi.WebStore.Frontend.BE.SalePage.SKUPropertyEntity[];
        Title: string;
    }
    interface SKUPropertyEntity {
        Name: string;
        PropertyNameSet: string;
        PropertySet: string;
    }
    interface SKUPropertySetEntity {
        GoodsSKUId: number;
        IsShow: boolean;
        OnceQty: number;
        PropertyNameSet: string;
        PropertySet: string;
        SaleProductSKUId: number;
        SellingQty: number;
    }
    interface SKUPropertyValueEntity {
        PropertyName: string;
        PropertyValueName: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.SalePageCategory {
    interface CategorySalePageDataEntity {
        CategoryText: string;
        Count: number;
        DisplayCategoryText: string;
        List: NineYi.WebStore.Frontend.BE.SalePage.SalePageForCategoryEntity[];
        ListMode: string;
        ParentCategoryId: number;
        ParentCategoryText: string;
        Score: string;
        SortMode: string;
        StatusDef: string;
        Took: string;
    }
    interface CategoryTagEntity {
        Color: string;
        IsMatchCondition: boolean;
        TypeDef: string;
        TypeDefDesc: string;
    }
    interface OfficialSalePageCategoryEntity {
        CategorySalePageData: NineYi.WebStore.Frontend.BE.SalePageCategory.CategorySalePageDataEntity;
        PromotionList: NineYi.WebStore.BE.Promotion.PromotionDetailForAPPEntity[];
        ShopId: number;
        ShopName: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.Search {
    interface SearchSalePageResultDataEntity {
        Id: number;
        ImageCount: number;
        IsFav: boolean;
        PicList: string[];
        PicUrl: string;
        Price: number;
        PV: number;
        Score: string;
        SellingStartDateTime: Date;
        ShopId: number;
        Sort: number;
        SubTitle: string;
        SuggestPrice: number;
        Title: string;
        UpdatedDateTime: Date;
    }
    interface SearchSalePageResultEntity {
        CurrentScoreThreshold: string;
        MaxScore: string;
        PriceRange: NineYi.WebStore.Frontend.BE.Search.SearchSalePageResultPriceRangeEntity;
        SalePageList: NineYi.WebStore.Frontend.BE.Search.SearchSalePageResultDataEntity[];
        Took: string;
        TotalSize: number;
    }
    interface SearchSalePageResultPriceRangeEntity {
        Max: number;
        Min: number;
    }
    interface SearchShopCategoryResultDataEntity {
        Count: number;
        Id: number;
        Name: string;
        Sort: number;
        SubShopCategories: NineYi.WebStore.Frontend.BE.Search.SearchShopCategoryResultDataEntity[];
    }
    interface SearchShopCategoryResultEntity {
        ShopCategories: NineYi.WebStore.Frontend.BE.Search.SearchShopCategoryResultDataEntity[];
        TotalSize: number;
    }
    interface SearchShopPayTypeAndShippingTypeEntity {
        PayTypeList: NineYi.WebStore.Frontend.BE.Search.SearchShopPayTypeEntity[];
        ShippingTypeList: NineYi.WebStore.Frontend.BE.Search.SearchShopShippingTypeEntity[];
    }
    interface SearchShopPayTypeEntity {
        TypeDef: string;
        TypeDefDesc: string;
    }
    interface SearchShopShippingTypeEntity {
        TypeDef: string;
        TypeDefDesc: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.Shop {
    interface ShopContractSettingEntity {
        IsCRMEnabled: boolean;
    }
    interface ShopInstallmentEntity {
        BankList: string[];
        DisplayName: string;
        EachInstallmentPrice: number;
        HasInterest: boolean;
        Id: number;
        InstallmentAmountLimit: number;
        InstallmentDef: number;
        InstallmentId: number;
        InstallmentRate: number;
        InterestDisplayName: string;
        ShopId: number;
    }
    interface ShopThirdPartyTradesOrderConfigurationEntity {
        HasThirdPartyQueryOrder: boolean;
        ThirdPartyQueryOrderDisplayName: string;
        ThirdPartyQueryOrderUrl: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.ShopCategoryRankings {
    interface ShopCategoryHotSaleRankingEntity {
        PicUrl: string;
        Price: number;
        Rank: number;
        SalePageId: number;
        SalePageTitle: string;
        SalePageUpdatedDateTime: Date;
        SuggestPrice: number;
        TotalSaleQty: number;
    }
}
declare module NineYi.WebStore.Frontend.BE.ShoppingCart {
    interface ShoppingCartCheckoutEntityV2 {
        DeliveryTypeDefGroup: string;
        DisplayName: string;
        Type: string;
    }
    interface ShoppingCartClientDeliveryTypeEntity {
        DeliveryTypeDef: string;
        DeliveryTypeDefGroup: string;
        DisplayTypeName: string;
        DisplayTypeNameForApp: string;
        Fee: number;
        FeeTypeDef: string;
        FeeTypeDefDesc: string;
        Id: number;
        IsReachFreeFee: boolean;
        MargeTypeName: string;
        MaxPriceLimit: number;
        MergeShippingTypeId: number;
        OverPrice: number;
        ShippingProfileTypeDef: string;
        TemperatureTypeDef: string;
        TypeName: string;
    }
    interface ShoppingCartClientFreeGiftPromotionEntity {
        FreeGiftSalePageList: NineYi.WebStore.Frontend.BE.Promotion.PromotionFreeGiftEntity[];
        PromotionConditionId: number;
        PromotionId: number;
    }
    interface ShoppingCartClientPayTypeEntity {
        Name: string;
        PayProfileTypeDef: string;
        StatisticsTypeDef: string;
        TypeDef: string;
    }
    interface ShoppingCartClientPromotionConditionEntity {
        DiscountPrice: number;
        DiscountRate: number;
        DiscountTypeDef: string;
        DiscountTypeDefDesc: string;
        FreeGifts: NineYi.WebStore.Frontend.BE.Promotion.PromotionFreeGiftEntity[];
        Id: number;
        TotalPrice: number;
        TotalQty: number;
        TypeDef: string;
        TypeDefDesc: string;
    }
    interface ShoppingCartClientPromotionEntity {
        Conditions: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartClientPromotionConditionEntity[];
        DiscountTitle: string;
        HasCheckMustBuySalePage: boolean;
        Id: number;
        IsPromotionMatchCondition: boolean;
        IsShowFreeGiftSoldOut: boolean;
        PromotionTypeTitle: string;
        Targets: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartClientPromotionTargetEntity[];
        TargetsV2: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartClientPromotionTargetV2Entity[];
        Title: string;
    }
    interface ShoppingCartClientPromotionTargetEntity {
        TargetId: string;
        TargetType: string;
    }
    interface ShoppingCartClientPromotionTargetV2Entity {
        TargetIdList: string[];
        TargetType: string;
    }
    interface ShoppingCartClientReachQtyPromotionConditionEntity {
        Id: number;
        IsMatched: boolean;
        ReachQtyCount: number;
        TotalPayment: number;
        TotalQty: number;
    }
    interface ShoppingCartClientReachQtyPromotionEntity {
        CalculatedConditions: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartClientReachQtyPromotionConditionEntity[];
        IsReachQty: boolean;
        PromotionId: number;
        SalePageIdList: number[];
        TotalPayment: number;
        TotalQty: number;
    }
    interface ShoppingCartClientSalePageEntity {
        AveragePayment: number;
        DateTime: Date;
        DeliveryTypeList: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartClientDeliveryTypeEntity[];
        ECouponDiscount: number;
        HasPromotion: boolean;
        HasTotalPriceFreeGiftPromotion: boolean;
        Height: number;
        IsGift: boolean;
        IsLimit: boolean;
        IsSalePageGift: boolean;
        IsSelected: boolean;
        IsZeroInstallmentRate: boolean;
        Length: number;
        MatchedPromotions: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartMatchedPromotionEntity[];
        Msg: string;
        PayTypeList: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartClientPayTypeEntity[];
        PicUrl: string;
        Price: number;
        PromotionDiscount: number;
        PromotionProductSKUId: number;
        Qty: number;
        QtyLimit: number;
        ReachQtyPromotionDiscount: number;
        SalePageGiftGroupSeq: number;
        SalePageGiftId: number;
        SalePageGiftList: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartClientSalePageGiftEntity[];
        SalePageGiftSlaveId: number;
        SalePageGroupSeq: number;
        SalePageId: number;
        SaleProductId: number;
        SaleProductSKUId: number;
        ShippingDate: Date;
        ShippingEndDate: Date;
        ShippingTypeDef: number;
        ShippingTypeDefDesc: string;
        ShippingWaitingDays: number;
        ShopCategoryIdList: number[];
        SKUPropertyDisplay: string;
        SKUPropertyDisplayList: string[];
        SourceCategoryId: number;
        SourceShopCategoryId: number;
        SupplierStoreProfileMasterCode: string;
        SupplierStoreProfileStoreSlaveCode: string;
        Tags: NineYi.WebStore.Frontend.BE.SalePageCategory.CategoryTagEntity[];
        TagsV2: NineYi.WebStore.Frontend.BE.SalePageCategory.CategoryTagEntity[];
        TaxTypeDef: string;
        TemperatureShippingEndDate: Date;
        TemperatureShippingStartDate: Date;
        TemperatureTypeDef: string;
        Title: string;
        TotalDiscount: number;
        TotalPayment: number;
        TotalPrice: number;
        Type: string;
        UnloginId: string;
        Weight: number;
        Width: number;
    }
    interface ShoppingCartClientSalePageGiftEntity {
        Qty: number;
        SalePageGiftId: number;
        SalePageGiftSlaveId: number;
        SalePageId: number;
        SaleProductSKUId: number;
        SellingQty: number;
        Title: string;
    }
    interface ShoppingCartClientShopEntity {
        CheckoutTypeList: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartCheckoutEntityV2[];
        DeliveryTypeList: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartClientDeliveryTypeEntity[];
        ECouponDiscount: number;
        ECouponList: NineYi.WebStore.Frontend.BE.ECoupon.ECouponSlaveEntity[];
        EcoupontTitle: string;
        FreeGiftPromotionList: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartClientFreeGiftPromotionEntity[];
        HasActiveEcouponCode: boolean;
        HasLowTemperatureDeliverySaleProduct: boolean;
        HasStoreDeliveryTypeWarning: boolean;
        HasStorePaymentLimit: boolean;
        InstallmentList: NineYi.WebStore.Frontend.BE.Shop.ShopInstallmentEntity[];
        IsSelected: boolean;
        MemberShopId: number;
        PayTypeList: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartClientPayTypeEntity[];
        PromotionDiscount: number;
        PromotionList: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartClientPromotionEntity[];
        ReachQtyPromotionList: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartClientReachQtyPromotionEntity[];
        SalePageList: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartClientSalePageEntity[];
        SalePagePromotionDetailList: NineYi.WebStore.Frontend.BE.Promotion.SalePagePromotionDetailEntity[];
        SelectedCheckoutType: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartCheckoutEntityV2;
        SelectedECouponSlaveId: number;
        SelectedInstallmentId: number;
        SelectedPayType: string;
        SelectedShopShippingTypeId: number;
        SelectedShopShippingTypeTypeDef: string;
        ShippingFee: number;
        ShopId: number;
        ShopInstallmentLowestLimitAmt: number;
        ShopName: string;
        SignatureInformation: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartVerifySignatureEntity;
        SoldoutSalePageList: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartClientSalePageEntity[];
        SupplierStoreProfileList: NineYi.WebStore.Frontend.BE.SupplierStoreProfile.SupplierStoreProfileEntity[];
        TotalDiscount: number;
        TotalFreeGiftCount: number;
        TotalPayment: number;
        TotalPrice: number;
        TotalPriceWithReachQtyDiscount: number;
        TotalPromotionDiscount: number;
        TotalQty: number;
        TrackAppVersion: string;
        TrackChannelTypeDef: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartTrackChannelTypeDefEnum;
        TrackDeviceTypeDef: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartTrackDeviceTypeDefEnum;
        TrackSourceTypeDef: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartTrackSourceTypeDefEnum;
        TradesOrderCode: string;
    }
    interface ShoppingCartItemEntity {
        MemberId: string;
        Qty: number;
        SalePageGroupSeq: number;
        SalePageId: number;
        SaleProductSkuId: number;
        ShopId: number;
    }
    interface ShoppingCartMatchedPromotionEntity {
        ConditionDiscount: number;
        ConditionDiscountRate: number;
        ConditionDiscountTypeDef: string;
        ConditionId: number;
        DiscountAllocated: number;
        DiscountAllocatedQty: number;
        Id: number;
        Name: string;
        TypeDef: string;
    }
    interface ShoppingCartPreviewEntity {
        ShopList: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartPreviewShopEntity[];
    }
    interface ShoppingCartPreviewSalePageEntity {
        PicUrl: string;
        Price: number;
        Qty: number;
        SalePageGroupSeq: number;
        SalePageId: number;
        SaleProductSKUId: number;
        ShopCategoryIdList: number[];
        Title: string;
    }
    interface ShoppingCartPreviewShopEntity {
        Promotion: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartClientPromotionEntity[];
        SalePageList: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartPreviewSalePageEntity[];
        ShopId: number;
        ShopName: string;
        ShoppingCartTotalPrice: number;
        ShoppingCartTotalQty: number;
        TotalPrice: number;
        TotalQty: number;
    }
    interface ShoppingCartVerifySignatureClientPromotionConditionEntity {
        DiscountPrice: string;
        DiscountRate: string;
        DiscountTypeDef: string;
        DiscountTypeDefDesc: string;
        Id: number;
        TotalPrice: string;
        TotalQty: number;
        TypeDef: string;
        TypeDefDesc: string;
    }
    interface ShoppingCartVerifySignatureClientPromotionEntity {
        Conditions: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartVerifySignatureClientPromotionConditionEntity[];
        Id: number;
        Targets: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartClientPromotionTargetEntity[];
    }
    interface ShoppingCartVerifySignatureEntity {
        Signature: string;
        SignaturePlaintext: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartVerifySignaturePlaintextEntity;
        TimeStamp: number;
    }
    interface ShoppingCartVerifySignaturePlaintextEntity {
        ShoppingCartClientPromotions: NineYi.WebStore.Frontend.BE.ShoppingCart.ShoppingCartVerifySignatureClientPromotionEntity[];
    }
}
declare module NineYi.WebStore.Frontend.BE.ShoppingCartV2 {
    interface ShoppingCartClientCheckoutEntity {
        DeliveryTypeList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientDeliveryTypeEntity[];
        DisplayMessage: string;
        DisplayPayTypeList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientPayTypeGroupEntity[];
        DisplayShippingTypeList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientShippingTypeGroupEntity[];
        IsTotalPriceOverShippingLimit: boolean;
        PayTypeList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientPayTypeEntity[];
        ShippingMaxPriceLimit: number;
    }
    interface ShoppingCartClientDeliveryTypeEntity {
        Fee: number;
        FeeTypeDef: string;
        FeeTypeDefDesc: string;
        Id: number;
        IsCheapestFee: boolean;
        IsReachFreeFee: boolean;
        IsSelected: boolean;
        MaxPriceLimit: number;
        MergeShippingTypeId: number;
        OverPrice: number;
        ShippingProfileTypeDef: string;
        TemperatureTypeDef: string;
        TotalFee: number;
        TypeName: string;
    }
    interface ShoppingCartClientEntity {
        CheckoutType: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientCheckoutEntity;
        ECouponDiscount: number;
        ECouponList: NineYi.WebStore.Frontend.BE.ECoupon.ECouponSlaveEntity[];
        FreeGiftPromotionList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientFreeGiftPromotionEntity[];
        HasActiveEcouponCode: boolean;
        InstallmentList: NineYi.WebStore.Frontend.BE.Shop.ShopInstallmentEntity[];
        IsEnableECouponSelect: boolean;
        MatchedInstallmentList: NineYi.WebStore.Frontend.BE.Shop.ShopInstallmentEntity[];
        PayShippingMappingList: NineYi.WebStore.Frontend.BE.PayShippingMapping.PayShippingMappingEntity[];
        PromotionCalculateList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientPromotionCalculateDetailEntity[];
        PromotionDiscount: number;
        PromotionList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientPromotionEntity[];
        ReachQtyPromotionDiscount: number;
        ReachQtyPromotionList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientReachQtyPromotionEntity[];
        SalePageCount: number;
        SalePageGroupList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientSalePageGroupEntity[];
        SelectedCheckoutPayTypeGroup: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientPayTypeGroupEntity;
        SelectedCheckoutShippingTypeGroup: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientShippingTypeGroupEntity;
        SelectedECouponSlaveId: number;
        ShopId: number;
        ShopName: string;
        ShoppingDateTime: Date;
        SoldoutSalePageList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientSalePageEntity[];
        SubTotalPayment: number;
        SupplierStoreProfileList: NineYi.WebStore.Frontend.BE.SupplierStoreProfile.SupplierStoreProfileEntity[];
        TotalDiscount: number;
        TotalFee: number;
        TotalPayment: number;
        TotalPrice: number;
        TotalQty: number;
        UniqueKey: string;
        UnMappingCheckoutSalePageList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientSalePageEntity[];
        UserClientTrack: NineYi.WebStore.Frontend.BE.UserClientTrack.UserClientTrackEntity;
    }
    interface ShoppingCartClientFreeGiftPromotionEntity {
        PromotionConditionId: number;
        PromotionFreeGiftList: NineYi.WebStore.Frontend.BE.Promotion.PromotionFreeGiftEntity[];
        PromotionId: number;
    }
    interface ShoppingCartClientPayTypeEntity {
        Name: string;
        PayProfileTypeDef: string;
        StatisticsTypeDef: string;
    }
    interface ShoppingCartClientPayTypeGroupEntity {
        DisplayName: string;
        InstallmentType: NineYi.WebStore.Frontend.BE.Shop.ShopInstallmentEntity;
        IsRecommand: boolean;
        PayTypeList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientPayTypeEntity[];
        StatisticsTypeDef: string;
    }
    interface ShoppingCartClientPromotionCalculateDetailEntity {
        DiscountPrice: number;
        EnableCalculate: boolean;
        Price: number;
        PromotionConditionId: number;
        PromotionId: number;
        SalePageId: number;
        SalePageIndex: number;
        SaleProductSKUId: number;
        TotalDiscount: number;
    }
    interface ShoppingCartClientPromotionConditionEntity {
        DiscountPrice: number;
        DiscountRate: number;
        DiscountTypeDef: string;
        Id: number;
        IsMatched: boolean;
        PromotionFreeGiftList: NineYi.WebStore.Frontend.BE.Promotion.PromotionFreeGiftEntity[];
        ReachQtyCount: number;
        SalePageTotalQty: number;
        TotalPayment: number;
        TotalPrice: number;
        TotalQty: number;
        TypeDef: string;
    }
    interface ShoppingCartClientPromotionEntity {
        ConditionList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientPromotionConditionEntity[];
        HasCheckMustBuySalePage: boolean;
        Id: number;
        IsPromotionFreeGiftSoldOut: boolean;
        IsPromotionMatchCondition: boolean;
        IsReachQtyFixedPrice: boolean;
        IsTotalPriceFreeGift: boolean;
        PromotionConditionDiscountTypeDef: string;
        PromotionConditionTitle: string;
        PromotionConditionTypeDef: string;
        PromotionDiscountTitle: string;
        PromotionTypeTitle: string;
        TargetExcludeSalePageList: number[];
        TargetList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientPromotionTargetEntity[];
        TargetSalePageList: number[];
        Title: string;
    }
    interface ShoppingCartClientPromotionTargetEntity {
        TargetIdList: string[];
        TargetType: string;
    }
    interface ShoppingCartClientReachQtyPromotionEntity {
        CalculatedConditions: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientPromotionConditionEntity[];
        PromotionId: number;
        SalePageIdList: number[];
        TotalPayment: number;
        TotalQty: number;
    }
    interface ShoppingCartClientSalePageEntity {
        AveragePayment: number;
        DateTime: Date;
        DeliveryTypeList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientDeliveryTypeEntity[];
        ECouponDiscount: number;
        Height: number;
        IsExcludeECouponDiscount: boolean;
        IsGift: boolean;
        IsLimit: boolean;
        IsSalePageGift: boolean;
        Length: number;
        PayTypeList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientPayTypeEntity[];
        PicUrl: string;
        Price: number;
        PromotionDiscount: number;
        PromotionList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientSalePagePromotionEntity[];
        PromotionProductSKUId: number;
        Qty: number;
        QtyLimit: number;
        ReachQtyPromotionDiscount: number;
        SalePageGiftGroupSeq: number;
        SalePageGiftId: number;
        SalePageGiftList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientSalePageGiftEntity[];
        SalePageGiftSlaveId: number;
        SalePageGroupSeq: number;
        SalePageId: number;
        SaleProductId: number;
        SaleProductShippingDate: Date;
        SaleProductShippingEndDate: Date;
        SaleProductShippingTypeDef: string;
        SaleProductShippingWaitingDays: number;
        SaleProductSKUId: number;
        ShopCategoryIdList: number[];
        SKUPropertyDisplay: string;
        SKUPropertyDisplayList: string[];
        SourceCategoryId: number;
        SourceShopCategoryId: number;
        SupplierStoreProfileMasterCode: string;
        SupplierStoreProfileStoreSlaveCode: string;
        TaxTypeDef: string;
        TemperatureShippingEndDate: Date;
        TemperatureShippingStartDate: Date;
        TemperatureTypeDef: string;
        Title: string;
        TotalDiscount: number;
        TotalPayment: number;
        TotalPrice: number;
        Weight: number;
        Width: number;
    }
    interface ShoppingCartClientSalePageGiftEntity {
        Qty: number;
        SalePageGiftId: number;
        SalePageGiftSlaveId: number;
        SalePageId: number;
        SaleProductSKUId: number;
        SellingQty: number;
        Title: string;
    }
    interface ShoppingCartClientSalePageGroupEntity {
        ECouponDiscount: number;
        PromotionDiscount: number;
        ReachQtyPromotionDiscount: number;
        SalePageList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientSalePageEntity[];
        TemperatureTypeDef: string;
        TotalDiscount: number;
        TotalFee: number;
        TotalPayment: number;
        TotalPrice: number;
        TotalQty: number;
    }
    interface ShoppingCartClientSalePagePromotionEntity {
        DiscountAllocated: number;
        DiscountAllocatedQty: number;
        IsConditionMatched: boolean;
        MatchedCondition: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientPromotionConditionEntity;
        PromotionConditionDiscountTypeDef: string;
        PromotionConditionTypeDef: string;
        PromotionId: number;
        Title: string;
    }
    interface ShoppingCartClientShippingTypeGroupEntity {
        DeliveryTypeList: NineYi.WebStore.Frontend.BE.ShoppingCartV2.ShoppingCartClientDeliveryTypeEntity[];
        IsRecommand: boolean;
        ShippingProfileTypeDef: string;
        TotalFee: number;
    }
}
declare module NineYi.WebStore.Frontend.BE.SupplierStoreProfile {
    interface SupplierStoreProfileEntity {
        DistributorDef: string;
        Id: number;
        MasterCode: string;
        ShippingProfileTypeDef: string;
        StoreSlaveCode: string;
        TemperatureTypeDef: string;
    }
}
declare module NineYi.WebStore.Frontend.BE.TemperatureDeliveryTicket {
    interface TemperatureDeliveryTicketForPayProcessEntity {
        Id: number;
        ReservedNo: string;
        SaleProductSKUId: number;
        TemperatureProductDCOrderDate: Date;
        TemperatureProductDCShippingDate: Date;
        TemperatureProductShippingDate: Date;
    }
}
declare module NineYi.WebStore.Frontend.BE.TemperatureElectronicMap {
    interface FamilyMartResponseDataEntity {
        Addr: string;
        CvsTemp: string;
        Items: NineYi.WebStore.Frontend.BE.TemperatureElectronicMap.FamilyMartResponseItemEntity[];
        Name: string;
        StoreId: string;
    }
    interface FamilyMartResponseEntity {
        Data: NineYi.WebStore.Frontend.BE.TemperatureElectronicMap.FamilyMartResponseDataEntity;
        Message: string;
        ReturnCode: string;
    }
    interface FamilyMartResponseItemEntity {
        ChanItem: string;
        OrderDate: string;
        ReservedNo: string;
        ShipDate: string;
    }
    interface FamilyMartSendEntity {
        CvSid: string;
        CvsName: string;
        CvsTemp: string;
        Exchange: string;
        Items: NineYi.WebStore.Frontend.BE.TemperatureElectronicMap.FamilyMartSendItemEntity[];
        RcvOldStoreID: string;
    }
    interface FamilyMartSendItemEntity {
        ChanItem: string;
        EndDate: string;
        EshopId: string;
        EshopType: string;
        High: number;
        Length: number;
        ParentId: string;
        Qty: number;
        StartDate: string;
        Weight: number;
        Wide: number;
    }
}
declare module NineYi.WebStore.Frontend.BE.TradesOrder {
    interface TradesOrderEntity extends NineYi.Utility.EntityBase {
        DeliverTypeDef: string;
        HasInvoice: boolean;
        HasLocation: boolean;
        IsChange: boolean;
        IsCreditCardPay: boolean;
        IsDirectBuy: boolean;
        IsExpress: boolean;
        IsHomeDelivery: boolean;
        IsNeedCreditCheckInfo: boolean;
        IsSaveDataToExpress: boolean;
        IsStoreDelivery: boolean;
        IsStorePay: boolean;
        IsUserLastOrder: boolean;
        NeedInvoiceNo: boolean;
        PayTypeDef: string;
        TradesOrder_Act: string;
        TradesOrder_Code: string;
        TradesOrder_ECouponDiscount: number;
        TradesOrder_ECouponId: number;
        TradesOrder_ECouponName: string;
        TradesOrder_ECouponSlaveId: number;
        TradesOrder_Fr: string;
        TradesOrder_Fr2: string;
        TradesOrder_Id: number;
        TradesOrder_InvoiceAddress: string;
        TradesOrder_InvoiceCity: string;
        TradesOrder_InvoiceCountry: string;
        TradesOrder_InvoiceDistrict: string;
        TradesOrder_InvoiceName: string;
        TradesOrder_InvoiceNo: string;
        TradesOrder_InvoiceState: string;
        TradesOrder_InvoiceTitle: string;
        TradesOrder_InvoiceTypeDef: number;
        TradesOrder_InvoiceTypeDefDesc: string;
        TradesOrder_InvoiceZipCode: string;
        TradesOrder_IsClose: boolean;
        TradesOrder_MemberId: number;
        TradesOrder_Memo: string;
        TradesOrder_PayProfileTypeDef: string;
        TradesOrder_PromotionDiscount: number;
        TradesOrder_Secret: string;
        TradesOrder_ShippingProfileTypeDef: string;
        TradesOrder_ShopId: number;
        TradesOrder_ShopPayTypeId: number;
        TradesOrder_ShopShippingTypeId: number;
        TradesOrder_StatusCause: string;
        TradesOrder_StatusDef: string;
        TradesOrder_StatusDefDesc: string;
        TradesOrder_TemperatureTypeDef: string;
        TradesOrder_TotalATMPrice: number;
        TradesOrder_TotalAuthPrice: number;
        TradesOrder_TotalDiscount: number;
        TradesOrder_TotalFee: number;
        TradesOrder_TotalGetRedeem: number;
        TradesOrder_TotalGetWelfare: number;
        TradesOrder_TotalPayment: number;
        TradesOrder_TotalPrice: number;
        TradesOrder_TotalStorePrice: number;
        TradesOrder_TotalUseRedeem: number;
        TradesOrder_TotalUserWelfare: number;
        TradesOrder_TradesOrderGroupId: number;
        TradesOrderFeeList: NineYi.WebStore.Frontend.BE.TradesOrder.TradesOrderFeeEntity[];
        TradesOrderReceiverList: NineYi.WebStore.Frontend.BE.TradesOrder.TradesOrderReceiverEntity[];
        TradesOrderSecretData: string;
        TradesOrderSecretItem: NineYi.WebStore.Frontend.BE.TradesOrder.TradesOrderSecretEntity;
        TradesOrderSlaveList: NineYi.WebStore.Frontend.BE.TradesOrder.TradesOrderSlaveEntity[];
        TradesOrderSlaveListSecret: string;
    }
    interface TradesOrderFeeEntity extends NineYi.Utility.EntityBase {
        TradesOrderFee_ClosedDateTime: Date;
        TradesOrderFee_CreatedDateTime: Date;
        TradesOrderFee_CreatedUser: string;
        TradesOrderFee_Fee: number;
        TradesOrderFee_Id: number;
        TradesOrderFee_IsClosed: boolean;
        TradesOrderFee_Rowversion: number[];
        TradesOrderFee_TradesOrderCode: string;
        TradesOrderFee_TradesOrderGroupId: number;
        TradesOrderFee_TradesOrderId: number;
        TradesOrderFee_TradesOrderSlaveId: number;
        TradesOrderFee_TypeDef: string;
        TradesOrderFee_TypeDefDesc: string;
        TradesOrderFee_UpdatedDateTime: Date;
        TradesOrderFee_UpdatedTimes: number;
        TradesOrderFee_UpdatedUser: string;
        TradesOrderFee_ValidFlag: boolean;
    }
    interface TradesOrderForMyAccountEntity {
        CanCancel: boolean;
        CanReturn: boolean;
        DeliverTypeDef: string;
        PromotionNames: string;
        SalePageList: NineYi.WebStore.Frontend.BE.TradesOrder.TradesOrderSalePageGroupEntity[];
        ShopId: number;
        ShopName: string;
        ShopShippingTypeId: number;
        ShopShippingTypeName: string;
        ShopUrl: string;
        TotalDiscount: number;
        TotalPayment: number;
        TradesOrderCode: string;
        TradesOrderDateTime: Date;
        TradesOrderFee: number;
        TradesOrderId: number;
        TradesOrderMemo: string;
    }
    interface TradesOrderGroupEntity extends NineYi.Utility.EntityBase {
        IsCreditCardPay: boolean;
        TradesOrderGroup_Act: string;
        TradesOrderGroup_Code: string;
        TradesOrderGroup_CreatedDateTime: Date;
        TradesOrderGroup_CreatedUser: string;
        TradesOrderGroup_DateTime: Date;
        TradesOrderGroup_EachAmt: number;
        TradesOrderGroup_ECouponDiscount: number;
        TradesOrderGroup_FirstAmt: number;
        TradesOrderGroup_Fr: string;
        TradesOrderGroup_Fr2: string;
        TradesOrderGroup_HasInterest: boolean;
        TradesOrderGroup_Id: number;
        TradesOrderGroup_InstallmentDef: number;
        TradesOrderGroup_InstallmentInterest: number;
        TradesOrderGroup_InstallmentRate: number;
        TradesOrderGroup_MemberId: number;
        TradesOrderGroup_PromotionDiscount: number;
        TradesOrderGroup_Rowversion: number[];
        TradesOrderGroup_ShopId: number;
        TradesOrderGroup_TotalDiscount: number;
        TradesOrderGroup_TotalFee: number;
        TradesOrderGroup_TotalPayment: number;
        TradesOrderGroup_TotalPrice: number;
        TradesOrderGroup_TrackAppVersion: string;
        TradesOrderGroup_TrackChannelTypeDef: string;
        TradesOrderGroup_TrackDeviceTypeDef: string;
        TradesOrderGroup_TrackSourceTypeDef: string;
        TradesOrderGroup_UniqueKey: string;
        TradesOrderGroup_UnloginId: string;
        TradesOrderGroup_UpdatedDateTime: Date;
        TradesOrderGroup_UpdatedTimes: number;
        TradesOrderGroup_UpdatedUser: string;
        TradesOrderGroup_ValidFlag: boolean;
        TradesOrderList: NineYi.WebStore.Frontend.BE.TradesOrder.TradesOrderEntity[];
    }
    interface TradesOrderListUriEntity {
        Domain: string;
        Path: string;
    }
    interface TradesOrderReceiverEntity extends NineYi.Utility.EntityBase {
        TradesOrderReceiver_Address: string;
        TradesOrderReceiver_City: string;
        TradesOrderReceiver_Country: string;
        TradesOrderReceiver_DeliverTypeDef: string;
        TradesOrderReceiver_DeliverTypeDefDesc: string;
        TradesOrderReceiver_District: string;
        TradesOrderReceiver_Email: string;
        TradesOrderReceiver_Id: number;
        TradesOrderReceiver_Mobile: string;
        TradesOrderReceiver_Name: string;
        TradesOrderReceiver_Phone: string;
        TradesOrderReceiver_ShippingProfileTypeDef: string;
        TradesOrderReceiver_State: string;
        TradesOrderReceiver_StoreId: string;
        TradesOrderReceiver_StoreName: string;
        TradesOrderReceiver_TradesOrderId: number;
        TradesOrderReceiver_ZipCode: string;
    }
    interface TradesOrderSalePageGroupEntity {
        ExtraList: NineYi.WebStore.Frontend.BE.TradesOrder.TradesOrderSlaveForMyAccountEntity[];
        GiftList: NineYi.WebStore.Frontend.BE.TradesOrder.TradesOrderSlaveForMyAccountEntity[];
        HasNotification: boolean;
        MajorList: NineYi.WebStore.Frontend.BE.TradesOrder.TradesOrderSlaveForMyAccountEntity[];
        OptionalGiftList: NineYi.WebStore.Frontend.BE.TradesOrder.TradesOrderSlaveForMyAccountEntity[];
        SalePageGroupSeq: number;
        SalePageId: number;
        TradesOrderId: number;
        TradesOrderSlaveCode: string;
    }
    interface TradesOrderSecretEntity extends NineYi.Utility.EntityBase {
        TradesOrderSecret_CreditCardAddress: string;
        TradesOrderSecret_CreditCardBankCode: string;
        TradesOrderSecret_CreditCardBankName: string;
        TradesOrderSecret_CreditCardBirthday: string;
        TradesOrderSecret_CreditCardBirthdayDay: string;
        TradesOrderSecret_CreditCardBirthdayMonth: string;
        TradesOrderSecret_CreditCardBirthdayYear: string;
        TradesOrderSecret_CreditCardExpireDate: string;
        TradesOrderSecret_CreditCardExpireDateMonth: string;
        TradesOrderSecret_CreditCardExpireDateYear: string;
        TradesOrderSecret_CreditCardIdentity: string;
        TradesOrderSecret_CreditCardLastThreeNum: string;
        TradesOrderSecret_CreditCardMobile: string;
        TradesOrderSecret_CreditCardName: string;
        TradesOrderSecret_CreditCardNo: string;
        TradesOrderSecret_Id: number;
        TradesOrderSecret_TradesOrderId: number;
    }
    interface TradesOrderSlaveEntity extends NineYi.Utility.EntityBase {
        HasSKU: boolean;
        IsSalePageGift: boolean;
        PicUrl: string;
        PromotionFreeGiftId: number;
        SalePageGiftGroupSeq: number;
        SalePageGiftId: number;
        SalePageGiftSlaveId: number;
        SaleProductHeight: number;
        SaleProductLength: number;
        SaleProductShippingEndDate: Date;
        SaleProductTemperatureTypeDef: string;
        SaleProductWeight: number;
        SaleProductWidth: number;
        SKUPropertyList: NineYi.WebStore.Frontend.BE.SalePage.SKUPropertyValueEntity[];
        TemperatureDeliveryTicketId: number;
        TemperatureDeliveryTicketReservedNo: string;
        TemperatureProductDCOrderDate: Date;
        TemperatureProductDCShippingDate: Date;
        TemperatureProductShippingDate: Date;
        TradesOrderSlave_CarrierCode: string;
        TradesOrderSlave_CarrierTypeDef: string;
        TradesOrderSlave_CarrierTypeDefDesc: string;
        TradesOrderSlave_Code: string;
        TradesOrderSlave_Cost: number;
        TradesOrderSlave_CreatedDateTime: Date;
        TradesOrderSlave_CreatedUser: string;
        TradesOrderSlave_DateTime: Date;
        TradesOrderSlave_DeliverTypeDef: string;
        TradesOrderSlave_DeliverTypeDefDesc: string;
        TradesOrderSlave_DonateFlag: boolean;
        TradesOrderSlave_ECouponDiscount: number;
        TradesOrderSlave_GoodsId: number;
        TradesOrderSlave_GoodsSKUId: number;
        TradesOrderSlave_GoodsStockId: number;
        TradesOrderSlave_Id: number;
        TradesOrderSlave_InstallmentDef: number;
        TradesOrderSlave_InstallmentInterest: number;
        TradesOrderSlave_InstallmentRate: number;
        TradesOrderSlave_InvoiceTypeDef: string;
        TradesOrderSlave_InvoiceTypeDefDesc: string;
        TradesOrderSlave_IsClosed: boolean;
        TradesOrderSlave_IsExtra: boolean;
        TradesOrderSlave_IsGift: boolean;
        TradesOrderSlave_IsMajor: boolean;
        TradesOrderSlave_IsOptionalGift: boolean;
        TradesOrderSlave_Memo: string;
        TradesOrderSlave_PayProfileTypeDef: string;
        TradesOrderSlave_PayTypeDef: string;
        TradesOrderSlave_PayTypeDefDesc: string;
        TradesOrderSlave_Price: number;
        TradesOrderSlave_ProductStockId: number;
        TradesOrderSlave_PromotionDiscount: number;
        TradesOrderSlave_PromotionIds: string;
        TradesOrderSlave_PromotionNames: string;
        TradesOrderSlave_Qty: number;
        TradesOrderSlave_Rowversion: number[];
        TradesOrderSlave_SalePageGroupSeq: number;
        TradesOrderSlave_SalePageId: number;
        TradesOrderSlave_SaleProductId: number;
        TradesOrderSlave_SaleProductSKUId: number;
        TradesOrderSlave_SaleProductSKUOuterId: string;
        TradesOrderSlave_SaleProductSKUPropertyIdSet: string;
        TradesOrderSlave_SaleProductSKUPropertyNameSet: string;
        TradesOrderSlave_SaleProductTitle: string;
        TradesOrderSlave_ShippingDate: Date;
        TradesOrderSlave_ShippingProfileTypeDef: string;
        TradesOrderSlave_ShippingTypeDef: number;
        TradesOrderSlave_ShippingTypeDefDesc: string;
        TradesOrderSlave_ShippingWaitingDays: number;
        TradesOrderSlave_ShopShippingTypeId: number;
        TradesOrderSlave_ShopShippingTypeName: string;
        TradesOrderSlave_SnapshotUrl: string;
        TradesOrderSlave_SourceCategoryId: number;
        TradesOrderSlave_SourceShopCategoryId: number;
        TradesOrderSlave_StatusCause: string;
        TradesOrderSlave_StatusDef: string;
        TradesOrderSlave_StatusDefDesc: string;
        TradesOrderSlave_StatusUpdatedDateTime: Date;
        TradesOrderSlave_StatusUpdatedUser: string;
        TradesOrderSlave_SupplierId: number;
        TradesOrderSlave_TaxTypeDef: string;
        TradesOrderSlave_TaxTypeDefDesc: string;
        TradesOrderSlave_TemperatureTypeDef: string;
        TradesOrderSlave_TotalCost: number;
        TradesOrderSlave_TotalDiscount: number;
        TradesOrderSlave_TotalPayment: number;
        TradesOrderSlave_TotalPrice: number;
        TradesOrderSlave_TradesOrderId: number;
        TradesOrderSlave_TradesOrderReceiverId: number;
        TradesOrderSlave_TypeDef: number;
        TradesOrderSlave_TypeDefDesc: string;
        TradesOrderSlave_UnloginId: string;
        TradesOrderSlave_UpdatedDateTime: Date;
        TradesOrderSlave_UpdatedTimes: number;
        TradesOrderSlave_UpdatedUser: string;
        TradesOrderSlave_ValidFlag: boolean;
        TradesOrderSlavePromotionFreeGiftItem: NineYi.WebStore.Frontend.BE.TradesOrder.TradesOrderSlavePromotionFreeGiftEntity;
        TradesOrderSlavePromotionList: NineYi.WebStore.Frontend.BE.TradesOrder.TradesOrderSlavePromotionEntity[];
    }
    interface TradesOrderSlaveForMyAccountEntity {
        FeeType: string;
        HasECoupon: boolean;
        HasPromotion: boolean;
        OrderSlaveFlow_CanCancel: boolean;
        OrderSlaveFlow_CanReturn: boolean;
        OrderSlaveFlow_IsCancelRequesting: boolean;
        OrderSlaveFlow_PartialReturnFlag: boolean;
        OrderSlaveFlow_ShippingDateTime: Date;
        OrderSlaveFlow_ShippingOrderSlaveDateTime: Date;
        OrderSlaveFlow_ShippingOrderSlaveEntryAccountingDateTime: Date;
        OrderSlaveFlow_ShippingOrderSlaveHandOverDateTime: Date;
        OrderSlaveFlow_StatusForUserDef: string;
        OrderSlaveFlow_StatusForUserDefDesc: string;
        OrderSlaveFlow_UpdatedDateTime: Date;
        PicUrl: string;
        SalePageGiftList: NineYi.WebStore.Frontend.BE.SalePage.SalePageGiftForDisplayEntity[];
        TradesOrder_Code: string;
        TradesOrder_DateTime: Date;
        TradesOrder_Id: number;
        TradesOrder_Memo: string;
        TradesOrder_ShopId: number;
        TradesOrder_TotalFee: number;
        TradesOrderReceiver_Address: string;
        TradesOrderReceiver_City: string;
        TradesOrderReceiver_District: string;
        TradesOrderReceiver_ZipCode: string;
        TradesOrderSlave_CancelDefaultSelected: boolean;
        TradesOrderSlave_Code: string;
        TradesOrderSlave_DeliverTypeDef: string;
        TradesOrderSlave_DeliverTypeDefDesc: string;
        TradesOrderSlave_ECouponDiscount: number;
        TradesOrderSlave_Id: number;
        TradesOrderSlave_IsExtra: boolean;
        TradesOrderSlave_IsGift: boolean;
        TradesOrderSlave_IsIssuedInvoice: boolean;
        TradesOrderSlave_IsMajor: boolean;
        TradesOrderSlave_IsOptionalGift: boolean;
        TradesOrderSlave_IsSalePageGift: boolean;
        TradesOrderSlave_MemberId: number;
        TradesOrderSlave_PartialCancelFlag: boolean;
        TradesOrderSlave_PayProfileTypeDef: string;
        TradesOrderSlave_PayTypeDef: string;
        TradesOrderSlave_PayTypeDefDesc: string;
        TradesOrderSlave_Price: number;
        TradesOrderSlave_PromotionDiscount: number;
        TradesOrderSlave_PromotionNames: string;
        TradesOrderSlave_Qty: number;
        TradesOrderSlave_ReturnGoodsDefaultSelected: boolean;
        TradesOrderSlave_SalePageGiftGroupSeq: number;
        TradesOrderSlave_SalePageGiftId: number;
        TradesOrderSlave_SalePageGroupSeq: number;
        TradesOrderSlave_SalePageId: number;
        TradesOrderSlave_SaleProductSKUId: number;
        TradesOrderSlave_SaleProductSKUPropertyDisplayName: string;
        TradesOrderSlave_SaleProductSKUPropertyNameSet: string;
        TradesOrderSlave_SaleProductTemperatureTypeDef: string;
        TradesOrderSlave_ShippingDate: Date;
        TradesOrderSlave_ShopShippingTypeId: number;
        TradesOrderSlave_ShopShippingTypeName: string;
        TradesOrderSlave_SupplierId: number;
        TradesOrderSlave_TemperatureProductShippingDate: Date;
        TradesOrderSlave_Title: string;
        TradesOrderSlave_TotalDiscount: number;
        TradesOrderSlave_TotalPayment: number;
        TradesOrderSlave_TotalPrice: number;
    }
    interface TradesOrderSlavePromotionEntity extends NineYi.Utility.EntityBase {
        TradesOrderSlavePromotion_Discount: number;
        TradesOrderSlavePromotion_DiscountAllocated: number;
        TradesOrderSlavePromotion_DiscountAllocatedQty: number;
        TradesOrderSlavePromotion_DiscountRate: number;
        TradesOrderSlavePromotion_DiscountTypeDef: string;
        TradesOrderSlavePromotion_DiscountTypeDefDesc: string;
        TradesOrderSlavePromotion_Id: number;
        TradesOrderSlavePromotion_PromotionConditionId: number;
        TradesOrderSlavePromotion_PromotionId: number;
        TradesOrderSlavePromotion_PromotionName: string;
        TradesOrderSlavePromotion_SaleProductSKUId: number;
        TradesOrderSlavePromotion_TradesOrderSlaveId: number;
        TradesOrderSlavePromotion_TypeDef: number;
        TradesOrderSlavePromotion_TypeDefDesc: string;
    }
    interface TradesOrderSlavePromotionFreeGiftEntity {
        PromotionConditionId: number;
        PromotionFreeGiftId: number;
        PromotionId: number;
        SalePageId: number;
        SaleProductSKUId: number;
    }
}
declare module NineYi.WebStore.Frontend.BE.UserClientTrack {
    interface UserClientTrackEntity {
        AppVersion: string;
        HasTrackData: boolean;
        TrackAppVersion: System.Version;
        TrackChannelType: NineYi.WebStore.Frontend.BE.UserClientTrack.UserClientTrackChannelTypeEnum;
        TrackDeviceType: NineYi.WebStore.Frontend.BE.UserClientTrack.UserClientTrackDeviceTypeEnum;
        TrackSourceType: NineYi.WebStore.Frontend.BE.UserClientTrack.UserClientTrackSourceTypeEnum;
    }
}
declare module NineYi.WebStore.Frontend.BE.VIPMembers {
    interface ThirdPartyRequestChannelEntity {
        ChannelName: string;
        ChannelType: string;
        ChannelValue: string;
    }
    interface ThirdPartyRequestCustomRuleEntity {
        RuleTitle: string;
        RuleValue: string;
    }
    interface ThirdPartyRequestTradesSummayEntity {
        ChannelList: NineYi.WebStore.Frontend.BE.VIPMembers.ThirdPartyRequestChannelEntity[];
        CustomRuleList: NineYi.WebStore.Frontend.BE.VIPMembers.ThirdPartyRequestCustomRuleEntity[];
        OuterMemberCode: string;
        ShopId: number;
        TradesSummary: number;
        VipMemberId: number;
    }
    interface VIPDropDownDefinitionEntity {
        ColumnName: string;
        DropDownEntities: NineYi.WebStore.Frontend.BE.VIPMembers.VIPMemberDropDownEntity[];
        Note: string;
    }
    interface VIPInfoEntity {
        TradesInfo: NineYi.WebStore.Frontend.BE.VIPMembers.VIPShopMemberTradesSummaryForAppEntity;
        VIPMember: NineYi.WebStore.Frontend.BE.VIPMembers.VIPMemberForAppEntity;
        VIPMemberInfo: NineYi.WebStore.Frontend.BE.VIPMembers.VIPMemberInfoEntity;
    }
    interface VIPMemberDropDownEntity {
        Desc: string;
        Value: string;
    }
    interface VIPMemberForAppEntity {
        Id: number;
        MemberId: number;
        OuterId: string;
        ShopId: number;
        StatusTypeDef: string;
    }
    interface VIPMemberFromAppEntity {
        AnnualIncomeTypeDef: string;
        Birthday: Date;
        CellPhone: string;
        Custom1: string;
        Custom2: string;
        Custom3: string;
        Custom4: string;
        Custom5: string;
        DependentsTypeDef: string;
        EducationTypeDef: string;
        Email: string;
        FullName: string;
        GenderTypeDef: string;
        IdentityCardId: string;
        LocalPhone: string;
        LocationAddress: string;
        LocationCity: string;
        LocationCountry: string;
        LocationDistrict: string;
        LocationState: string;
        LocationZipCode: string;
        MarialStatusTypeDef: string;
        OuterAccount: string;
        OuterId: string;
        OuterPassword: string;
        ProfessionTypeDef: string;
    }
    interface VIPMemberInfoEntity {
        AnnualIncomeTypeDef: string;
        BarcodeValue: string;
        Birthday: Date;
        BirthdayMonth: number;
        CellPhone: string;
        Custom1: string;
        Custom2: string;
        Custom3: string;
        Custom4: string;
        Custom5: string;
        DependentsTypeDef: string;
        EducationTypeDef: string;
        Email: string;
        FullName: string;
        Gender: NineYi.WebStore.Frontend.BE.VIPMembers.VipMemberInfoGenderEnum;
        GenderTypeDef: string;
        Id: number;
        IdentityCardId: string;
        LastBirthdayPresentId: number;
        LastBirthdayPresentYear: number;
        LocalPhone: string;
        LocationAddress: string;
        LocationCity: string;
        LocationCountry: string;
        LocationDistrict: string;
        LocationState: string;
        LocationZipCode: string;
        MarialStatusTypeDef: string;
        MemberId: number;
        OpenCardPresentId: number;
        OuterAccount: string;
        OuterId: string;
        OuterPassword: string;
        ProfessionTypeDef: string;
        ShopId: number;
        StatusTypeDef: string;
        UpdatedDateTime: Date;
        VipMemberCode: string;
        VipMemberId: number;
        VipShopMemberCardId: number;
    }
    interface VIPMemberPresentStatusEntity {
        EnablePresentBtn: boolean;
        SourceId: number;
        SourceType: string;
    }
    interface VIPMemberWithRuleEntity<T> {
        ColumnHint: string;
        ColumnName: string;
        CustomName: string;
        Display: NineYi.WebStore.Frontend.BE.VIPMembers.VIPDropDownDefinitionEntity;
        IsBound: boolean;
        IsReadOnly: boolean;
        IsRequire: boolean;
        IsUsing: boolean;
        Value: T;
    }
    interface VIPShopMemberCardEntity {
        BarcodeTimeStamp: number;
        BarcodeTypeDef: string;
        BarcodeValue: string;
        Benefits: string;
        Id: number;
        LocationBindingButtonName: string;
        Name: string;
        ShopContractType: NineYi.WebStore.Frontend.BE.VIPMembers.VIPMemberShopContractTypeEnum;
        ShopId: number;
    }
    interface VIPShopMemberTradesSummaryForAppEntity {
        LastLocationTradesDateTime: string;
        LastMobileTradesDateTime: string;
        LastTradesDataUpdatedDateTime: string;
        LocationTradesSum: number;
        MobileTradesSum: number;
    }
}
declare module NineYi.WebStore.Frontend.BE.ZipCode {
    interface ZipCodeCityEntity {
        City: string;
        DistrictList: NineYi.WebStore.Frontend.BE.ZipCode.ZipCodeDistrictEntity[];
    }
    interface ZipCodeDistrictEntity {
        District: string;
        ZipCode: string;
    }
}
declare module System {
    interface Version {
        Build: number;
        Major: number;
        MajorRevision: number;
        Minor: number;
        MinorRevision: number;
        Revision: number;
    }
}


