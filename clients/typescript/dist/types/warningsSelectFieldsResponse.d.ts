import { Warnings } from "./warnings";
import { VersionType } from "./versionType";
export interface WarningsSelectFieldsResponse {
    warnings: Warnings;
    version1: VersionType;
    messageId: string;
}
