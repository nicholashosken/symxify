import { VendorFmHistory } from "./vendorFmHistory";
export interface VendorFmHistoryList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    vendorFmHistory: VendorFmHistory[];
    vendorFmHistorySpecified: boolean;
}
