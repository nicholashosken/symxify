import { ShareName } from "./shareName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareNamePagedListSelectFieldsResponse {
    shareName: ShareName[];
    shareNameSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
