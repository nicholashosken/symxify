import { SiteCashOrderType } from "./siteCashOrderType";
import { VersionType } from "./versionType";

export interface SiteCashOrderTypeSelectFieldsResponse {
    siteCashOrderType: SiteCashOrderType;
    version1: VersionType;
    messageId: string;
}