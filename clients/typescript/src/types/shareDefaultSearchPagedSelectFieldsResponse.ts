import { ShareDefault } from "./shareDefault";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareDefaultSearchPagedSelectFieldsResponse {
    shareDefault: ShareDefault[];
    shareDefaultSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}