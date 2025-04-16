import { ShareFieldName } from "./shareFieldName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareFieldNameSearchPagedSelectFieldsResponse {
    shareFieldName: ShareFieldName[];
    shareFieldNameSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}