import { DonorIdType } from "./donorIdType";
import { AuthorizationType } from "./authorizationType";
import { GlAccounts } from "./glAccounts";
import { GlCodes } from "./glCodes";
import { TransactionsBaseRequest } from "./transactionsBaseRequest";
export interface WithdrawFeeRequest extends TransactionsBaseRequest {
    accountNumber: string;
    donorId: string;
    donorType: DonorIdType | null;
    totalAmount: number | null;
    authorizationType: AuthorizationType | null;
    feeCode: number | null;
    comment: string;
    commentCode: number | null;
    effectiveDate: string | null;
    glAccounts: GlAccounts;
    glCodes: GlCodes;
    sourceCode: string;
    forcePostRequested: boolean | null;
    recurrenceRequested: boolean | null;
    glComment: string;
}
