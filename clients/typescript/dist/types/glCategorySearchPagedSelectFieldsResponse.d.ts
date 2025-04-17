import { GlCategory } from "./glCategory";
import { VersionType } from "./versionType";
export interface GlCategorySearchPagedSelectFieldsResponse {
    glCategory: GlCategory[];
    token: string;
    version1: VersionType;
    messageId: string;
}
