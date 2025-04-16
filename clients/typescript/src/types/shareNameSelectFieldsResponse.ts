import { ShareName } from "./shareName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareNameSelectFieldsResponse {
    shareName: ShareName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}