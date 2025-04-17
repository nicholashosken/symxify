import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppPersonSingleSelectableFields } from "./loanAppPersonSingleSelectableFields";
import { LoanAppPersonSearchFilter } from "./loanAppPersonSearchFilter";
import { VersionType } from "./versionType";

export interface LoanAppPersonSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppPersonSingleSelectableFields;
    searchFilter: LoanAppPersonSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}