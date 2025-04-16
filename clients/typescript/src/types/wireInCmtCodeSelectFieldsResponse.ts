import { WireInCmtCode } from "./wireInCmtCode";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireInCmtCodeSelectFieldsResponse {
    wireInCmtCode: WireInCmtCode;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}