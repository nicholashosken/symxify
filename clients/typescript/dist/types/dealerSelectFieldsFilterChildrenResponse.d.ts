import { Dealer } from "./dealer";
import { VersionType } from "./versionType";
export interface DealerSelectFieldsFilterChildrenResponse {
    dealer: Dealer;
    version1: VersionType;
    messageId: string;
}
