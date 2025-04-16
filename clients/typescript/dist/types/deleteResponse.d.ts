import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { FileManagementBaseResponse } from "./fileManagementBaseResponse";
export interface DeleteResponse extends FileManagementBaseResponse {
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
