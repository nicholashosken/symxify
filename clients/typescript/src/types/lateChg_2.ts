import { VersionType } from "./versionType";

export interface LateChg_2 {
    addLateChargetoPmt: number | null;
    additionalFlatFee: number | null;
    includeEscrowAmount: number | null;
    lateChargeFormula: number | null;
    lateChargeGraceDays: number | null;
    lateChargeMaximum: number | null;
    lateChargeMinimum: number | null;
    lateChargeRate: number | null;
    lateChargeType: number | null;
    subformat: number | null;
    version1: VersionType;
}