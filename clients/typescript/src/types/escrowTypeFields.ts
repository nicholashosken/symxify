import { VersionType } from "./versionType";

export interface EscrowTypeFields {
    adjustPaymentPortion: boolean | null;
    crEscDividendinPayoff: boolean | null;
    daysinAdvancetoPrintRpt: boolean | null;
    definedCode: boolean | null;
    description: boolean | null;
    escrowType: boolean | null;
    includeEscrowBalinPayoff: boolean | null;
    includeinEscrowAnalysis: boolean | null;
    invoiceType: boolean | null;
    numberofCushionMonths: boolean | null;
    paymentType: boolean | null;
    statementDescription: boolean | null;
    transactionDescription: boolean | null;
    version1: VersionType;
}