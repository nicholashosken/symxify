import { SymXClient } from "./symXClient";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SymXClientSelectFieldsResponse {
    symXClient: SymXClient;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
