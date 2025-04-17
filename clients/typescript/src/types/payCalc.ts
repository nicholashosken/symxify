import { PayCalcBalanceCutoff } from "./payCalcBalanceCutoff";
import { PayCalcIntRateCutoff } from "./payCalcIntRateCutoff";
import { PayCalcPayment14 } from "./payCalcPayment14";
import { PayCalcPaymentPercent15 } from "./payCalcPaymentPercent15";
import { PayCalcPayoffMonths } from "./payCalcPayoffMonths";
import { VersionType } from "./versionType";

export interface PayCalc {
    balanceCutoff: PayCalcBalanceCutoff[];
    balanceIncrement: number | null;
    balanceIncrementRounding: number | null;
    definedCode: number | null;
    description: string;
    dueGraceDays: number | null;
    intRateCutoff: PayCalcIntRateCutoff[];
    interestAdjPercent: number | null;
    lgDestnPmtCalcSetCode: number | null;
    lgSourcePmtCalcSetCode: number | null;
    payment10: number | null;
    payment14: PayCalcPayment14[];
    paymentCalculationFormula: number | null;
    paymentCalculationSetCode: number | null;
    paymentCalculationType: number | null;
    paymentFrequencyAdjustment: number | null;
    paymentMinimum: number | null;
    paymentPercent15: PayCalcPaymentPercent15[];
    paymentPercent2: number | null;
    payoffMonths: PayCalcPayoffMonths[];
    roundPaymentUptoMultiple: number | null;
    version1: VersionType;
}