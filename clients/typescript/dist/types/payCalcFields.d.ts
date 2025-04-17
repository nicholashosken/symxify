import { VersionType } from "./versionType";
export interface PayCalcFields {
    balanceCutoff: number[];
    balanceIncrement: boolean | null;
    balanceIncrementRounding: boolean | null;
    definedCode: boolean | null;
    description: boolean | null;
    dueGraceDays: boolean | null;
    intRateCutoff: number[];
    interestAdjPercent: boolean | null;
    lgDestnPmtCalcSetCode: boolean | null;
    lgSourcePmtCalcSetCode: boolean | null;
    payment10: boolean | null;
    payment14: number[];
    paymentCalculationFormula: boolean | null;
    paymentCalculationSetCode: boolean | null;
    paymentCalculationType: boolean | null;
    paymentFrequencyAdjustment: boolean | null;
    paymentMinimum: boolean | null;
    paymentPercent15: number[];
    paymentPercent2: boolean | null;
    payoffMonths: number[];
    roundPaymentUptoMultiple: boolean | null;
    version1: VersionType;
}
