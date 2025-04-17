import { CashLetterFields } from "./cashLetterFields";
import { VersionType } from "./versionType";

export interface CashLetterSingleSelectableFields {
    includeAllCashLetterFields: boolean | null;
    cashLetterFields: CashLetterFields;
    version1: VersionType;
}