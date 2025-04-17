import { DealerStatementFields } from "./dealerStatementFields";
import { VersionType } from "./versionType";
export interface DealerStatementSelectableFields {
    includeAllDealerStatementFields: boolean | null;
    dealerStatementFields: DealerStatementFields;
    version1: VersionType;
}
