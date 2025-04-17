import { DonorIdType } from "./donorIdType";
import { RecipientIdType } from "./recipientIdType";
import { AuthorizationType } from "./authorizationType";
import { RemitInformation } from "./remitInformation";
import { LoanPaymentType } from "./loanPaymentType";
import { TransactionsBaseRequest } from "./transactionsBaseRequest";
export interface TransferRequest extends TransactionsBaseRequest {
    donorAccountNumber: string;
    donorId: string;
    donorType: DonorIdType | null;
    recipientAccountNumber: string;
    recipientId: string;
    recipientType: RecipientIdType | null;
    transferAmount: number | null;
    comment: string;
    authorizationType: AuthorizationType | null;
    remitInformation: RemitInformation;
    forcePostRequested: boolean | null;
    principalAmount: number | null;
    sourceCode: string;
    effectiveDate: string | null;
    commentCode: number | null;
    loanPaymentType: LoanPaymentType | null;
    regulationDLimited: boolean | null;
    recurrenceRequested: boolean | null;
    glComment: string;
}
