import { VersionType } from "./versionType";
export interface ExtLoanFields {
    accountMask: boolean | null;
    activityDateUpdate: boolean | null;
    advanceTransactionGlCode: boolean | null;
    allowAdvances: boolean | null;
    allowFreezeUnfreezeofCard: boolean | null;
    allowPartialPayments: boolean | null;
    externalDataSourceName: boolean | null;
    externalLoanTrackingType: boolean | null;
    nearRealTimeRecordUpdate: boolean | null;
    onlineDbPassword: boolean | null;
    onlineDbUserId: boolean | null;
    onlineGlobalAppPasswd: boolean | null;
    onlineGlobalAppUserId: boolean | null;
    partialPaymentTranCode: boolean | null;
    paymentTransactionGlCode: boolean | null;
    processor: boolean | null;
    processorAbbreviation: boolean | null;
    processorAcctVerCode: boolean | null;
    processorCode: boolean | null;
    processorName: boolean | null;
    reportLostorStolenCards: boolean | null;
    tranCodeAdvDesc: number[];
    tranCodeAdvance: number[];
    tranCodePayment: number[];
    tranCodePmtDesc: number[];
    version1: VersionType;
}
