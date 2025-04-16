import { OnlineSbAddOn } from "./onlineSbAddOn";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OnlineSbAddOnSearchPagedSelectFieldsResponse {
    onlineSbAddOn: OnlineSbAddOn[];
    onlineSbAddOnSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}