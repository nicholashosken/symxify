import { VersionType } from "./versionType";
import { FileManagementBaseResponse } from "./fileManagementBaseResponse";

export interface DownloadResponse extends FileManagementBaseResponse {
    data: string;
    version1: VersionType;
}