import { DivTable } from "./divTable";
import { VersionType } from "./versionType";
export interface DivTableSearchPagedSelectFieldsResponse {
    divTable: DivTable[];
    token: string;
    version1: VersionType;
    messageId: string;
}
