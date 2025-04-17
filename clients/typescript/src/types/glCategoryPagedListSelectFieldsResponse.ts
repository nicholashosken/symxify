import { GlCategory } from "./glCategory";
import { VersionType } from "./versionType";

export interface GlCategoryPagedListSelectFieldsResponse {
    glCategory: GlCategory[];
    token: string;
    version1: VersionType;
    messageId: string;
}