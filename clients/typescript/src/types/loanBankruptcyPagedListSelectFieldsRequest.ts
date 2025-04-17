import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanBankruptcySingleSelectableFields } from "./loanBankruptcySingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanBankruptcyPagedListSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanBankruptcySingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}