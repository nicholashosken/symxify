import { PayCalcBalanceCutoff_2 } from "./payCalcBalanceCutoff_2";
import { PayCalcIntRateCutoff_2 } from "./payCalcIntRateCutoff_2";
import { PayCalcPayment14_2 } from "./payCalcPayment14_2";
import { PayCalcPaymentPercent15_2 } from "./payCalcPaymentPercent15_2";
import { PayCalcPayoffMonths_2 } from "./payCalcPayoffMonths_2";
import { VersionType } from "./versionType";

export interface PayCalc_2 {
    balanceCutoff: PayCalcBalanceCutoff_2[];
    balanceIncrement: number | null;
    balanceIncrementRounding: number | null;
    definedCode: number | null;
    description: string;
    dueGraceDays: number | null;
    intRateCutoff: PayCalcIntRateCutoff_2[];
    interestAdjPercent: number | null;
    lgDestnPmtCalcSetCode: number | null;
    lgSourcePmtCalcSetCode: number | null;
    payment10: number | null;
    payment14: PayCalcPayment14_2[];
    paymentCalculationFormula: number | null;
    paymentCalculationSetCode: number | null;
    paymentCalculationType: number | null;
    paymentFrequencyAdjustment: number | null;
    paymentMinimum: number | null;
    paymentPercent15: PayCalcPaymentPercent15_2[];
    paymentPercent2: number | null;
    payoffMonths: PayCalcPayoffMonths_2[];
    roundPaymentUptoMultiple: number | null;
    version1: VersionType;
}