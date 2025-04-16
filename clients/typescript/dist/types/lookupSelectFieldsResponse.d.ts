import { Lookup } from "./lookup";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LookupSelectFieldsResponse {
    lookup: Lookup;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
