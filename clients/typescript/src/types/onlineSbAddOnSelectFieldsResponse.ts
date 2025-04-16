import { OnlineSbAddOn } from "./onlineSbAddOn";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OnlineSbAddOnSelectFieldsResponse {
    onlineSbAddOn: OnlineSbAddOn;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}