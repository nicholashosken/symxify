import { Site } from "./site";
import { VersionType } from "./versionType";

export interface SiteSearchPagedSelectFieldsResponse {
    site: Site[];
    token: string;
    version1: VersionType;
    messageId: string;
}