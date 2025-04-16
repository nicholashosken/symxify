import { SymXGeneral } from "./symXGeneral";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SymXGeneralPagedListSelectFieldsResponse {
    symXGeneral: SymXGeneral[];
    symXGeneralSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}