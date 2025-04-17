import { Statement } from "./statement";
import { VersionType } from "./versionType";
export interface StatementSelectFieldsResponse {
    statement: Statement;
    version1: VersionType;
    messageId: string;
}
