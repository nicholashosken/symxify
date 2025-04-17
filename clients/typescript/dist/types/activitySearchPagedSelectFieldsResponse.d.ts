import { Activity } from "./activity";
import { VersionType } from "./versionType";
export interface ActivitySearchPagedSelectFieldsResponse {
    activity: Activity[];
    token: string;
    version1: VersionType;
    messageId: string;
}
