import { OnlineOutlet } from "./onlineOutlet";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OnlineOutletSelectFieldsResponse {
    onlineOutlet: OnlineOutlet;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}