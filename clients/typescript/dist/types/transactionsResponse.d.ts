import { TransactionFee } from "./transactionFee";
import { OverdrawInformation } from "./overdrawInformation";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { BaseResponse } from "./baseResponse";
export interface TransactionsResponse extends BaseResponse {
    checkNumber: string;
    checkAccountCodeValue: number;
    checkAccountCodeValueSpecified: boolean;
    checkAccountCode: number | null;
    transactionFees: TransactionFee[];
    transactionFeesSpecified: boolean;
    overdrawInformation: OverdrawInformation;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    confirmation: string;
    sequenceFromValue: number;
    sequenceFromValueSpecified: boolean;
    sequenceFrom: number | null;
    sequenceToValue: number;
    sequenceToValueSpecified: boolean;
    sequenceTo: number | null;
    transactionPostDateValue: string;
    transactionPostDateValueSpecified: boolean;
    transactionPostDate: string | null;
}
