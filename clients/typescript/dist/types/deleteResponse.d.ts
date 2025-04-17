import { VersionType } from "./versionType";
import { FileManagementBaseResponse } from "./fileManagementBaseResponse";
export interface DeleteResponse extends FileManagementBaseResponse {
    version1: VersionType;
}
