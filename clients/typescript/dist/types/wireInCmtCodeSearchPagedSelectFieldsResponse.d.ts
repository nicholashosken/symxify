import { WireInCmtCode } from "./wireInCmtCode";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireInCmtCodeSearchPagedSelectFieldsResponse {
    wireInCmtCode: WireInCmtCode[];
    wireInCmtCodeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
