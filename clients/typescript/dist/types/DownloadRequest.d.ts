import { VersionType } from "./versionType";
import { FileManagementBaseRequest } from "./fileManagementBaseRequest";
export interface DownloadRequest extends FileManagementBaseRequest {
    fileName: string;
    version1: VersionType;
}
