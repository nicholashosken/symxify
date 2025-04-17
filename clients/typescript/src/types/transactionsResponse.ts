import { TransactionFee } from "./transactionFee";
import { OverdrawInformation } from "./overdrawInformation";
import { VersionType } from "./versionType";
import { BaseResponse } from "./baseResponse";

export interface TransactionsResponse extends BaseResponse {
    checkNumber: string;
    checkAccountCode: number | null;
    transactionFees: TransactionFee[];
    overdrawInformation: OverdrawInformation;
    version1: VersionType;
    confirmation: string;
    sequenceFrom: number | null;
    sequenceTo: number | null;
    transactionPostDate: string | null;
}