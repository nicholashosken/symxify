import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { FileManagementBaseRequest } from "./fileManagementBaseRequest";

export interface DownloadRequest extends FileManagementBaseRequest {
    fileName: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}