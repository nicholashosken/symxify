import { CredRep } from "./credRep";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CredRepSelectFieldsFilterChildrenResponse {
    credRep: CredRep;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
