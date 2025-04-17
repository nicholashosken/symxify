import { EscrowAnalysisDeficiencyGeAmount } from "./escrowAnalysisDeficiencyGeAmount";
import { EscrowAnalysisDeficiencyGeNbrOfMonths } from "./escrowAnalysisDeficiencyGeNbrOfMonths";
import { EscrowAnalysisDeficiencyLtAmount } from "./escrowAnalysisDeficiencyLtAmount";
import { EscrowAnalysisDeficiencyLtNbrOfMonths } from "./escrowAnalysisDeficiencyLtNbrOfMonths";
import { EscrowAnalysisShortageGeAmount } from "./escrowAnalysisShortageGeAmount";
import { EscrowAnalysisShortageGeNbrOfMonths } from "./escrowAnalysisShortageGeNbrOfMonths";
import { EscrowAnalysisShortageLtAmount } from "./escrowAnalysisShortageLtAmount";
import { EscrowAnalysisShortageLtNbrOfMonths } from "./escrowAnalysisShortageLtNbrOfMonths";
import { BitMap } from "./bitMap";
import { VersionType } from "./versionType";

export interface EscrowAnalysis {
    analysisPastDueExceptions: number | null;
    deficiencyGe1EscrwPayMthd: number | null;
    deficiencyGeAmount: EscrowAnalysisDeficiencyGeAmount[];
    deficiencyGeNbrOfMonths: EscrowAnalysisDeficiencyGeNbrOfMonths[];
    deficiencyLt1EscrwPayMthd: number | null;
    deficiencyLtAmount: EscrowAnalysisDeficiencyLtAmount[];
    deficiencyLtNbrOfMonths: EscrowAnalysisDeficiencyLtNbrOfMonths[];
    escrowOverageMinDollarAmt: number | null;
    escrowOverageMinPercentage: number | null;
    escrowOverageProcessingMthd: number | null;
    newPaymentRounding: number | null;
    paymentChangeThreshold: number | null;
    shortageGe1EscrowPayMethd: number | null;
    shortageGeAmount: EscrowAnalysisShortageGeAmount[];
    shortageGeNbrOfMonths: EscrowAnalysisShortageGeNbrOfMonths[];
    shortageLt1EscrowPayMethd: number | null;
    shortageLtAmount: EscrowAnalysisShortageLtAmount[];
    shortageLtNbrOfMonths: EscrowAnalysisShortageLtNbrOfMonths[];
    warningCodeList: BitMap;
    version1: VersionType;
}