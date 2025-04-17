import { DebtRatioFields } from "./debtRatioFields";
import { VersionType } from "./versionType";

export interface DebtRatioSelectableFields {
    includeAllDebtRatioFields: boolean | null;
    debtRatioFields: DebtRatioFields;
    version1: VersionType;
}