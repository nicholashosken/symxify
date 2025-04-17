import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppLnSegmentSingleSelectableFields } from "./loanAppLnSegmentSingleSelectableFields";
import { LoanAppLnSegmentSearchFilter } from "./loanAppLnSegmentSearchFilter";
import { VersionType } from "./versionType";

export interface LoanAppLnSegmentSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppLnSegmentSingleSelectableFields;
    searchFilter: LoanAppLnSegmentSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}