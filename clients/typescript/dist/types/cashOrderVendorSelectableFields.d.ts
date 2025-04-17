import { CashOrderVendorFields } from "./cashOrderVendorFields";
import { VersionType } from "./versionType";
export interface CashOrderVendorSelectableFields {
    includeAllCashOrderVendorFields: boolean | null;
    cashOrderVendorFields: CashOrderVendorFields;
    version1: VersionType;
}
