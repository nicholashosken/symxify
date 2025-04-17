import { DonorIdType } from "./donorIdType";
import { CheckIssuerType } from "./checkIssuerType";
import { GlAccounts } from "./glAccounts";
import { GlCodes } from "./glCodes";
import { AuthorizationType } from "./authorizationType";
import { TransactionsBaseRequest } from "./transactionsBaseRequest";
export interface BillPaymentRequest extends TransactionsBaseRequest {
    accountNumber: string;
    id: string;
    idType: DonorIdType | null;
    paymentAmount: number | null;
    checkIssuer: CheckIssuerType | null;
    comment: string;
    glAccounts: GlAccounts;
    glCodes: GlCodes;
    authorizationType: AuthorizationType | null;
    forcePostRequested: boolean | null;
    sourceCode: string;
    effectiveDate: string | null;
    commentCode: number | null;
    regulationDLimited: boolean | null;
    recurrenceRequested: boolean | null;
    glComment: string;
}
