import { ShareHold } from "./shareHold";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareHoldPagedListSelectFieldsResponse {
    shareHold: ShareHold[];
    shareHoldSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}