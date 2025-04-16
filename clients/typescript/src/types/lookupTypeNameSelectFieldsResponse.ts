import { LookupTypeName } from "./lookupTypeName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LookupTypeNameSelectFieldsResponse {
    lookupTypeName: LookupTypeName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}