import { SymXInstance } from "./symXInstance";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SymXInstanceSelectFieldsResponse {
    symXInstance: SymXInstance;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
