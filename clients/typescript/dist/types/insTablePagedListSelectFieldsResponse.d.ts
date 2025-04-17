import { InsTable } from "./insTable";
import { VersionType } from "./versionType";
export interface InsTablePagedListSelectFieldsResponse {
    insTable: InsTable[];
    token: string;
    version1: VersionType;
    messageId: string;
}
