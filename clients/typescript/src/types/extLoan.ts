import { BitMap } from "./bitMap";
import { ExtLoanTranCodeAdvDesc } from "./extLoanTranCodeAdvDesc";
import { ExtLoanTranCodeAdvance } from "./extLoanTranCodeAdvance";
import { ExtLoanTranCodePayment } from "./extLoanTranCodePayment";
import { ExtLoanTranCodePmtDesc } from "./extLoanTranCodePmtDesc";
import { VersionType } from "./versionType";

export interface ExtLoan {
    accountMask: string;
    activityDateUpdate: boolean | null;
    advanceTransactionGlCode: number | null;
    allowAdvances: boolean | null;
    allowFreezeUnfreezeofCard: boolean | null;
    allowPartialPayments: boolean | null;
    externalDataSourceName: string;
    externalLoanTrackingType: BitMap;
    nearRealTimeRecordUpdate: boolean | null;
    onlineDbPassword: string;
    onlineDbUserId: string;
    onlineGlobalAppPasswd: string;
    onlineGlobalAppUserId: string;
    partialPaymentTranCode: string;
    paymentTransactionGlCode: number | null;
    processor: number | null;
    processorAbbreviation: string;
    processorAcctVerCode: number | null;
    processorCode: number | null;
    processorName: string;
    reportLostorStolenCards: boolean | null;
    tranCodeAdvDesc: ExtLoanTranCodeAdvDesc[];
    tranCodeAdvance: ExtLoanTranCodeAdvance[];
    tranCodePayment: ExtLoanTranCodePayment[];
    tranCodePmtDesc: ExtLoanTranCodePmtDesc[];
    version1: VersionType;
}