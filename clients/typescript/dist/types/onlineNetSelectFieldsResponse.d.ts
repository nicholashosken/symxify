import { OnlineNet } from "./onlineNet";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineNetSelectFieldsResponse {
    onlineNet: OnlineNet;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
