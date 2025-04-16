import { AcsGlobal } from "./acsGlobal";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AcsGlobalSelectFieldsResponse {
    acsGlobal: AcsGlobal;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
