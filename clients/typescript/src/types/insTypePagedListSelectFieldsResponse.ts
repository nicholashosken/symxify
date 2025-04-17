import { InsType } from "./insType";
import { VersionType } from "./versionType";

export interface InsTypePagedListSelectFieldsResponse {
    insType: InsType[];
    token: string;
    version1: VersionType;
    messageId: string;
}