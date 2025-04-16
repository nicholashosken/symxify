import { WireOutCmtCode } from "./wireOutCmtCode";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireOutCmtCodeSearchPagedSelectFieldsResponse {
    wireOutCmtCode: WireOutCmtCode[];
    wireOutCmtCodeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}