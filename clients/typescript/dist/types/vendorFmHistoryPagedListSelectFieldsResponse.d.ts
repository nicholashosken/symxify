import { VendorFmHistory } from "./vendorFmHistory";
import { VersionType } from "./versionType";
export interface VendorFmHistoryPagedListSelectFieldsResponse {
    vendorFmHistory: VendorFmHistory[];
    token: string;
    version1: VersionType;
    messageId: string;
}
