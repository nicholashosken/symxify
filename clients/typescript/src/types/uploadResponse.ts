import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { FileManagementBaseResponse } from "./fileManagementBaseResponse";

export interface UploadResponse extends FileManagementBaseResponse {
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}