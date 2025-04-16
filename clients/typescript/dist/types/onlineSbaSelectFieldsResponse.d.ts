import { OnlineSba } from "./onlineSba";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineSbaSelectFieldsResponse {
    onlineSba: OnlineSba;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
