import { DebtRatioFieldNo } from "./debtRatioFieldNo";
import { DebtRatioFieldUse } from "./debtRatioFieldUse";
import { VersionType } from "./versionType";
export interface DebtRatio {
    fieldNo: DebtRatioFieldNo[];
    fieldUse: DebtRatioFieldUse[];
    payFactor: number | null;
    payUseCode: number | null;
    type: number | null;
    version1: VersionType;
}
