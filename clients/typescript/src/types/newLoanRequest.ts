import { AmountInformation } from "./amountInformation";
import { CheckIssuerType } from "./checkIssuerType";
import { GlAccounts } from "./glAccounts";
import { GlCodes } from "./glCodes";
import { PayeeInformation } from "./payeeInformation";
import { AuthorizationType } from "./authorizationType";
import { Printer } from "./printer";
import { Dispenser } from "./dispenser";
import { TransactionsBaseRequest } from "./transactionsBaseRequest";

export interface NewLoanRequest extends TransactionsBaseRequest {
    accountNumber: string;
    loanId: string;
    loanAmounts: AmountInformation;
    checkNumber: string;
    checkIssuer: CheckIssuerType | null;
    comment: string;
    checkAccountCode: number | null;
    glAccounts: GlAccounts;
    glCodes: GlCodes;
    payee: PayeeInformation;
    authorizationType: AuthorizationType | null;
    sourceCode: string;
    effectiveDate: string | null;
    commentCode: number | null;
    checkReference: string;
    recurrenceRequested: boolean | null;
    forcePostRequested: boolean | null;
    tracerNumber: string;
    draftNumber: string;
    printer: Printer[];
    dispenser: Dispenser[];
    calculateCheck: boolean | null;
    glComment: string;
}