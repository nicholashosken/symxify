import { SiteCashOrderType } from "./siteCashOrderType";
import { VersionType } from "./versionType";
export interface SiteCashOrderTypeSearchPagedSelectFieldsResponse {
    siteCashOrderType: SiteCashOrderType[];
    token: string;
    version1: VersionType;
    messageId: string;
}
