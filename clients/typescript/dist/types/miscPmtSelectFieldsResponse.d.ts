import { MiscPmt } from "./miscPmt";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface MiscPmtSelectFieldsResponse {
    miscPmt: MiscPmt;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
