import { VersionType } from "./versionType";
import { FileManagementBaseResponse } from "./fileManagementBaseResponse";

export interface UploadResponse extends FileManagementBaseResponse {
    version1: VersionType;
}