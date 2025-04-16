import { CredRep } from "./credRep";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CredRepSearchPagedSelectFieldsResponse {
    credRep: CredRep[];
    credRepSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
