import { Share } from "./share";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareSelectFieldsResponse {
    share: Share;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
