import { GlCode } from "./glCode";
import { AmountInformation } from "./amountInformation";
import { CheckIssuerType } from "./checkIssuerType";
import { PayeeInformation } from "./payeeInformation";
import { TransactionsBaseRequest } from "./transactionsBaseRequest";

export interface GlToGlPostingRequest extends TransactionsBaseRequest {
    donorAccountNumber: string;
    donorGlCode: GlCode;
    recipientAccountNumber: string;
    recipientGlCode: GlCode;
    amounts: AmountInformation;
    checkIssuer: CheckIssuerType | null;
    comment: string;
    payee: PayeeInformation;
    sourceCode: string;
    effectiveDate: string | null;
    commentCode: number | null;
    checkReference: string;
    recurrenceRequested: boolean | null;
    calculateCheck: boolean | null;
}