import { CashOrderVendor } from "./cashOrderVendor";

export interface CashOrderVendorList {
    hasReachedMaximumListSize: boolean | null;
    cashOrderVendor: CashOrderVendor[];
}