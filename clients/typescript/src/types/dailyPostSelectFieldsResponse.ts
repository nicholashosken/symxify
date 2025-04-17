import { DailyPost } from "./dailyPost";
import { VersionType } from "./versionType";

export interface DailyPostSelectFieldsResponse {
    dailyPost: DailyPost;
    version1: VersionType;
    messageId: string;
}