import { DealerStatementFields } from "./dealerStatementFields";
import { VersionType } from "./versionType";

export interface DealerStatementSingleSelectableFields {
    includeAllDealerStatementFields: boolean | null;
    dealerStatementFields: DealerStatementFields;
    version1: VersionType;
}