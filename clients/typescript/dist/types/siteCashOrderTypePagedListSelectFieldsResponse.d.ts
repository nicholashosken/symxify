import { SiteCashOrderType } from "./siteCashOrderType";
import { VersionType } from "./versionType";
export interface SiteCashOrderTypePagedListSelectFieldsResponse {
    siteCashOrderType: SiteCashOrderType[];
    token: string;
    version1: VersionType;
    messageId: string;
}
