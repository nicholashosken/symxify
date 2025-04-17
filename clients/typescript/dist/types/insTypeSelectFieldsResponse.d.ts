import { InsType } from "./insType";
import { VersionType } from "./versionType";
export interface InsTypeSelectFieldsResponse {
    insType: InsType;
    version1: VersionType;
    messageId: string;
}
