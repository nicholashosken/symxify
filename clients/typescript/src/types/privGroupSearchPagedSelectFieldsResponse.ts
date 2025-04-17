import { PrivGroup } from "./privGroup";
import { VersionType } from "./versionType";

export interface PrivGroupSearchPagedSelectFieldsResponse {
    privGroup: PrivGroup[];
    token: string;
    version1: VersionType;
    messageId: string;
}