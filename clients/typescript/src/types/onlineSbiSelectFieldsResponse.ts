import { OnlineSbi } from "./onlineSbi";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OnlineSbiSelectFieldsResponse {
    onlineSbi: OnlineSbi;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}