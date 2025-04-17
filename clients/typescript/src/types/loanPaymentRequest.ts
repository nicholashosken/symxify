import { LoanIdType } from "./loanIdType";
import { AmountInformation } from "./amountInformation";
import { GlAccounts } from "./glAccounts";
import { GlCodes } from "./glCodes";
import { AuthorizationType } from "./authorizationType";
import { RemitInformation } from "./remitInformation";
import { LoanPaymentType } from "./loanPaymentType";
import { TransactionsBaseRequest } from "./transactionsBaseRequest";

export interface LoanPaymentRequest extends TransactionsBaseRequest {
    recipientAccountNumber: string;
    recipientId: string;
    recipientIdType: LoanIdType | null;
    paymentAmounts: AmountInformation;
    comment: string;
    glAccounts: GlAccounts;
    glCodes: GlCodes;
    authorizationType: AuthorizationType | null;
    remitInformation: RemitInformation;
    forcePostRequested: boolean | null;
    principalAmount: number | null;
    sourceCode: string;
    effectiveDate: string | null;
    commentCode: number | null;
    loanPaymentType: LoanPaymentType | null;
    recurrenceRequested: boolean | null;
    glComment: string;
}