import { VersionType } from "./versionType";

export interface PmtAppMethodFields {
    createAddlPrincipalComment: boolean | null;
    currentExcessOrder: number[];
    definedCode: boolean | null;
    description: boolean | null;
    dqExcessOrder: number[];
    gracePmtExcessOrder: number[];
    includeEscrowUnpdinPmtDue: boolean | null;
    paymentOrder: number[];
    prepaidExcessOrder: number[];
    thresholdPaymentIndicator: boolean | null;
    type: boolean | null;
    version1: VersionType;
}