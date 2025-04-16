import { Share } from "./share";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareSearchPagedSelectFieldsResponse {
    share: Share[];
    shareSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
