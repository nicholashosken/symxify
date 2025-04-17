import { OnlineSbAddOn } from "./onlineSbAddOn";
import { VersionType } from "./versionType";

export interface OnlineSbAddOnSelectFieldsResponse {
    onlineSbAddOn: OnlineSbAddOn;
    version1: VersionType;
    messageId: string;
}