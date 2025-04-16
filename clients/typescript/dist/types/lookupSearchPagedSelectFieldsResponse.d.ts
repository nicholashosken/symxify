import { Lookup } from "./lookup";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LookupSearchPagedSelectFieldsResponse {
    lookup: Lookup[];
    lookupSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
