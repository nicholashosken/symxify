import { OnlineFile } from "./onlineFile";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineFileSelectFieldsResponse {
    onlineFile: OnlineFile;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
