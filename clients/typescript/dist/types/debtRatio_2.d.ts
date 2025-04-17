import { DebtRatioFieldNo_2 } from "./debtRatioFieldNo_2";
import { DebtRatioFieldUse_2 } from "./debtRatioFieldUse_2";
import { VersionType } from "./versionType";
export interface DebtRatio_2 {
    fieldNo: DebtRatioFieldNo_2[];
    fieldUse: DebtRatioFieldUse_2[];
    payFactor: number | null;
    payUseCode: number | null;
    type: number | null;
    version1: VersionType;
}
