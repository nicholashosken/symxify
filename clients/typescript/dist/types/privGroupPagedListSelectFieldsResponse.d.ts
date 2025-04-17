import { PrivGroup } from "./privGroup";
import { VersionType } from "./versionType";
export interface PrivGroupPagedListSelectFieldsResponse {
    privGroup: PrivGroup[];
    token: string;
    version1: VersionType;
    messageId: string;
}
