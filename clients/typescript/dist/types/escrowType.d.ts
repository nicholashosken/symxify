import { VersionType } from "./versionType";
export interface EscrowType {
    adjustPaymentPortion: boolean | null;
    crEscDividendinPayoff: boolean | null;
    daysinAdvancetoPrintRpt: number | null;
    definedCode: number | null;
    description: string;
    escrowTypeProperty: number | null;
    includeEscrowBalinPayoff: number | null;
    includeinEscrowAnalysis: boolean | null;
    invoiceType: number | null;
    numberofCushionMonths: number | null;
    paymentType: number | null;
    statementDescription: string;
    transactionDescription: string;
    version1: VersionType;
}
