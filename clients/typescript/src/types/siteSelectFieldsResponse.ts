import { Site } from "./site";
import { VersionType } from "./versionType";

export interface SiteSelectFieldsResponse {
    site: Site;
    version1: VersionType;
    messageId: string;
}