import { Dealer } from "./dealer";
import { VersionType } from "./versionType";
export interface DealerSelectFieldsResponse {
    dealer: Dealer;
    version1: VersionType;
    messageId: string;
}
