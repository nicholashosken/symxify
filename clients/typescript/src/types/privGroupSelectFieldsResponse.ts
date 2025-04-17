import { PrivGroup } from "./privGroup";
import { VersionType } from "./versionType";

export interface PrivGroupSelectFieldsResponse {
    privGroup: PrivGroup;
    version1: VersionType;
    messageId: string;
}