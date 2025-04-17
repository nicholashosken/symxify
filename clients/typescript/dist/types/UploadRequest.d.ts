import { VersionType } from "./versionType";
import { FileManagementBaseRequest } from "./fileManagementBaseRequest";
export interface UploadRequest extends FileManagementBaseRequest {
    fileName: string;
    data: string;
    noNewline: boolean | null;
    version1: VersionType;
}
