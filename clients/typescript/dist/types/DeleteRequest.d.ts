import { VersionType } from "./versionType";
import { FileManagementBaseRequest } from "./fileManagementBaseRequest";
export interface DeleteRequest extends FileManagementBaseRequest {
    fileName: string;
    version1: VersionType;
}
