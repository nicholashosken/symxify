import { OnlineSbAddOn } from "./onlineSbAddOn";
import { VersionType } from "./versionType";
export interface OnlineSbAddOnSearchPagedSelectFieldsResponse {
    onlineSbAddOn: OnlineSbAddOn[];
    token: string;
    version1: VersionType;
    messageId: string;
}
