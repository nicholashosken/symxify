import { SymXGeneral } from "./symXGeneral";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SymXGeneralSelectFieldsResponse {
    symXGeneral: SymXGeneral;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}