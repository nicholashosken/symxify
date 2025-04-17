import { VersionType } from "./versionType";
export interface EscrowAnalysisFields {
    analysisPastDueExceptions: boolean | null;
    deficiencyGe1EscrwPayMthd: boolean | null;
    deficiencyGeAmount: number[];
    deficiencyGeNbrOfMonths: number[];
    deficiencyLt1EscrwPayMthd: boolean | null;
    deficiencyLtAmount: number[];
    deficiencyLtNbrOfMonths: number[];
    escrowOverageMinDollarAmt: boolean | null;
    escrowOverageMinPercentage: boolean | null;
    escrowOverageProcessingMthd: boolean | null;
    newPaymentRounding: boolean | null;
    paymentChangeThreshold: boolean | null;
    shortageGe1EscrowPayMethd: boolean | null;
    shortageGeAmount: number[];
    shortageGeNbrOfMonths: number[];
    shortageLt1EscrowPayMethd: boolean | null;
    shortageLtAmount: number[];
    shortageLtNbrOfMonths: number[];
    warningCodeList: boolean | null;
    version1: VersionType;
}
