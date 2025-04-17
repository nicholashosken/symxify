import { VersionType } from "./versionType";

export interface SiteCashOrderTypeFields {
    activeFlag: boolean | null;
    applyHandlingFee: boolean | null;
    cashOrderTypeCoinBag: number[];
    cashOrderTypeCoinRoll: number[];
    cashOrderTypeComment: number[];
    cashOrderTypeCurrFit: number[];
    cashOrderTypeCurrNew: number[];
    cashOrderTypeDelCharge: boolean | null;
    cashOrderTypeMaxOrder: boolean | null;
    cashOrderTypeMinOrder: boolean | null;
    cashOrderTypeName: boolean | null;
    cashOrderTypeSpecDelCharge: boolean | null;
    closeDate: boolean | null;
    delFrequency: boolean | null;
    deliveryDays: number[];
    locationCode: boolean | null;
    locator: boolean | null;
    orderLimiting: boolean | null;
    recordChangeDate: boolean | null;
    specHandlingFee: boolean | null;
    vendorNumber: boolean | null;
    version1: VersionType;
}