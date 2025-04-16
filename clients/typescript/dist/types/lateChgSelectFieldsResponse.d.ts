import { LateChg } from "./lateChg";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LateChgSelectFieldsResponse {
    lateChg: LateChg;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
