import { VersionType } from "./versionType";
export interface LateChgFields {
    addLateChargetoPmt: boolean | null;
    additionalFlatFee: boolean | null;
    includeEscrowAmount: boolean | null;
    lateChargeFormula: boolean | null;
    lateChargeGraceDays: boolean | null;
    lateChargeMaximum: boolean | null;
    lateChargeMinimum: boolean | null;
    lateChargeRate: boolean | null;
    lateChargeType: boolean | null;
    subformat: boolean | null;
    version1: VersionType;
}
