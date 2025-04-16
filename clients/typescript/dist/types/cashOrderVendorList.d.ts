import { CashOrderVendor } from "./cashOrderVendor";
export interface CashOrderVendorList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    cashOrderVendor: CashOrderVendor[];
    cashOrderVendorSpecified: boolean;
}
