import { Warnings } from "./warnings";
import { VersionType } from "./versionType";
export interface WarningsSearchPagedSelectFieldsResponse {
    warnings: Warnings[];
    token: string;
    version1: VersionType;
    messageId: string;
}
