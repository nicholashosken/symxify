import { DivIndexLocal } from "./divIndexLocal";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DivIndexLocalSelectFieldsResponse {
    divIndexLocal: DivIndexLocal;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
