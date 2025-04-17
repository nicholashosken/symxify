import { DonorIdType } from "./donorIdType";
import { PayeeInformation } from "./payeeInformation";
import { DraftNumbers } from "./draftNumbers";
import { VersionType } from "./versionType";
import { TransactionsBaseRequest } from "./transactionsBaseRequest";

export interface StopCheckPaymentRequest extends TransactionsBaseRequest {
    accountNumber: string;
    donorId: string;
    donorType: DonorIdType | null;
    totalAmount: number | null;
    comment: string;
    commentCode: number | null;
    effectiveDate: string | null;
    payee: PayeeInformation;
    draftNumbers: DraftNumbers;
    sourceCode: string;
    recurrenceRequested: boolean | null;
    version1: VersionType;
}