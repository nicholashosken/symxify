import { CashOrderVendorFields } from "./cashOrderVendorFields";
import { VersionType } from "./versionType";

export interface CashOrderVendorSingleSelectableFields {
    includeAllCashOrderVendorFields: boolean | null;
    cashOrderVendorFields: CashOrderVendorFields;
    version1: VersionType;
}