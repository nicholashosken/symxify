import { OnlineMain } from "./onlineMain";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineMainSelectFieldsResponse {
    onlineMain: OnlineMain;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
