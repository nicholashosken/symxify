import { OnlineFile } from "./onlineFile";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OnlineFilePagedListSelectFieldsResponse {
    onlineFile: OnlineFile[];
    onlineFileSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}