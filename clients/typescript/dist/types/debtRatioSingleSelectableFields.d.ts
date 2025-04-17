import { DebtRatioFields } from "./debtRatioFields";
import { VersionType } from "./versionType";
export interface DebtRatioSingleSelectableFields {
    includeAllDebtRatioFields: boolean | null;
    debtRatioFields: DebtRatioFields;
    version1: VersionType;
}
