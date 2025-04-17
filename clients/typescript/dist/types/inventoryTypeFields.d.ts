import { VersionType } from "./versionType";
export interface InventoryTypeFields {
    alternateDescription: boolean | null;
    commentCode: boolean | null;
    description: boolean | null;
    expenseGlCode: boolean | null;
    feeGlCode: boolean | null;
    idDefault: boolean | null;
    incomeGlCode: boolean | null;
    inventoryGlCode: boolean | null;
    inventoryType: boolean | null;
    multiplePrompt: boolean | null;
    negotiableInstrumentTracking: boolean | null;
    screenDefinitionType: boolean | null;
    serialNumberUsage: boolean | null;
    significantDigits: boolean | null;
    summaryCommentCode: boolean | null;
    version1: VersionType;
}
