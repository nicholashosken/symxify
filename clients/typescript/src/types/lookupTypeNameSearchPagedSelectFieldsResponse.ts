import { LookupTypeName } from "./lookupTypeName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LookupTypeNameSearchPagedSelectFieldsResponse {
    lookupTypeName: LookupTypeName[];
    lookupTypeNameSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}