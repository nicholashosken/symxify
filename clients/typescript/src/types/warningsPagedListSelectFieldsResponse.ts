import { Warnings } from "./warnings";
import { VersionType } from "./versionType";

export interface WarningsPagedListSelectFieldsResponse {
    warnings: Warnings[];
    token: string;
    version1: VersionType;
    messageId: string;
}