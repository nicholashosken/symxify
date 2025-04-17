import { PartStatement } from "./partStatement";
import { VersionType } from "./versionType";
export interface PartStatementSelectFieldsResponse {
    partStatement: PartStatement;
    version1: VersionType;
    messageId: string;
}
