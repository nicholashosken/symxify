import { Share } from "./share";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareSelectFieldsFilterChildrenResponse {
    share: Share;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}