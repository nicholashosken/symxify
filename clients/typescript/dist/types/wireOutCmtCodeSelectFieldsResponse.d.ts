import { WireOutCmtCode } from "./wireOutCmtCode";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireOutCmtCodeSelectFieldsResponse {
    wireOutCmtCode: WireOutCmtCode;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
