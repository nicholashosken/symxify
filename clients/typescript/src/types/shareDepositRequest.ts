import { AmountInfo } from "./amountInfo";
import { GlAccounts } from "./glAccounts";
import { GlCodes } from "./glCodes";
import { TaxDeferredContributionCode } from "./taxDeferredContributionCode";
import { CashDeviceType } from "./cashDeviceType";
import { ReversalType } from "./reversalType";
import { TransactionsBaseRequest } from "./transactionsBaseRequest";

export interface ShareDepositRequest extends TransactionsBaseRequest {
    accountNumber: string;
    shareId: string;
    depositAmounts: AmountInfo;
    glAccounts: GlAccounts;
    glCodes: GlCodes;
    comment: string;
    effectiveDate: string | null;
    commentCode: number | null;
    taxDeferredContributionCode: TaxDeferredContributionCode | null;
    sourceCode: string;
    recurrenceRequested: boolean | null;
    cashDevice: CashDeviceType;
    glComment: string;
    reversal: ReversalType;
}