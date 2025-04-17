import { InsTable } from "./insTable";
import { VersionType } from "./versionType";

export interface InsTableSearchPagedSelectFieldsResponse {
    insTable: InsTable[];
    token: string;
    version1: VersionType;
    messageId: string;
}