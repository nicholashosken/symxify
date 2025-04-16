import { ShareFieldName } from "./shareFieldName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareFieldNameSelectFieldsResponse {
    shareFieldName: ShareFieldName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}