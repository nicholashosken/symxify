import { DivTable } from "./divTable";
import { VersionType } from "./versionType";
export interface DivTableSelectFieldsResponse {
    divTable: DivTable;
    version1: VersionType;
    messageId: string;
}
