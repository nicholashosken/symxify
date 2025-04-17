import { VendorFmHistory } from "./vendorFmHistory";
export interface VendorFmHistoryList {
    hasReachedMaximumListSize: boolean | null;
    vendorFmHistory: VendorFmHistory[];
}
