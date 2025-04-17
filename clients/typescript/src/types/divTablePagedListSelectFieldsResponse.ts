import { DivTable } from "./divTable";
import { VersionType } from "./versionType";

export interface DivTablePagedListSelectFieldsResponse {
    divTable: DivTable[];
    token: string;
    version1: VersionType;
    messageId: string;
}