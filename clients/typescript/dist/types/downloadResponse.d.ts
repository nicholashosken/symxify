import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { FileManagementBaseResponse } from "./fileManagementBaseResponse";
export interface DownloadResponse extends FileManagementBaseResponse {
    data: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
