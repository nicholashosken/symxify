import { VersionType } from "./versionType";

export interface InventoryType {
    alternateDescription: string;
    commentCode: number | null;
    description: string;
    expenseGlCode: number | null;
    feeGlCode: number | null;
    idDefault: number | null;
    incomeGlCode: number | null;
    inventoryGlCode: number | null;
    inventoryTypeProperty: number | null;
    multiplePrompt: number | null;
    negotiableInstrumentTracking: boolean | null;
    screenDefinitionType: number | null;
    serialNumberUsage: number | null;
    significantDigits: number | null;
    summaryCommentCode: number | null;
    version1: VersionType;
}