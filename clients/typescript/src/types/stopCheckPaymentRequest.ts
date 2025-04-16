import { DonorIdType } from "./donorIdType";
import { PayeeInformation } from "./payeeInformation";
import { DraftNumbers } from "./draftNumbers";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { TransactionsBaseRequest } from "./transactionsBaseRequest";

export interface StopCheckPaymentRequest extends TransactionsBaseRequest {
    accountNumber: string;
    donorId: string;
    donorTypeValue: DonorIdType;
    donorTypeValueSpecified: boolean;
    donorType: DonorIdType | null;
    totalAmountValue: number;
    totalAmountValueSpecified: boolean;
    totalAmount: number | null;
    comment: string;
    commentCodeValue: number;
    commentCodeValueSpecified: boolean;
    commentCode: number | null;
    effectiveDateValue: string;
    effectiveDateValueSpecified: boolean;
    effectiveDate: string | null;
    payee: PayeeInformation;
    draftNumbers: DraftNumbers;
    sourceCode: string;
    recurrenceRequestedValue: boolean;
    recurrenceRequestedValueSpecified: boolean;
    recurrenceRequested: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}