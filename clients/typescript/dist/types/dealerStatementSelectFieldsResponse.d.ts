import { DealerStatement } from "./dealerStatement";
import { VersionType } from "./versionType";
export interface DealerStatementSelectFieldsResponse {
    dealerStatement: DealerStatement;
    version1: VersionType;
    messageId: string;
}
