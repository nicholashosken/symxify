import { ShareDefault } from "./shareDefault";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareDefaultSelectFieldsResponse {
    shareDefault: ShareDefault;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}