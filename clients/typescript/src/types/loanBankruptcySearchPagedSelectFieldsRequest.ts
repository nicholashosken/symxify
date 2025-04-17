import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanBankruptcySingleSelectableFields } from "./loanBankruptcySingleSelectableFields";
import { LoanBankruptcySearchFilter } from "./loanBankruptcySearchFilter";
import { VersionType } from "./versionType";

export interface LoanBankruptcySearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanBankruptcySingleSelectableFields;
    searchFilter: LoanBankruptcySearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}