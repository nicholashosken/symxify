import { InsTable } from "./insTable";
import { VersionType } from "./versionType";
export interface InsTableSelectFieldsResponse {
    insTable: InsTable;
    version1: VersionType;
    messageId: string;
}
