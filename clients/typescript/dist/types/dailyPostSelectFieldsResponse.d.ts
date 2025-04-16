import { DailyPost } from "./dailyPost";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DailyPostSelectFieldsResponse {
    dailyPost: DailyPost;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
