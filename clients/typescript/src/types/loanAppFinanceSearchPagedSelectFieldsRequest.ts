import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppFinanceSingleSelectableFields } from "./loanAppFinanceSingleSelectableFields";
import { LoanAppFinanceSearchFilter } from "./loanAppFinanceSearchFilter";
import { VersionType } from "./versionType";

export interface LoanAppFinanceSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppFinanceSingleSelectableFields;
    searchFilter: LoanAppFinanceSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}