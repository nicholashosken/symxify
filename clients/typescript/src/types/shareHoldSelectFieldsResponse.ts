import { ShareHold } from "./shareHold";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareHoldSelectFieldsResponse {
    shareHold: ShareHold;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}