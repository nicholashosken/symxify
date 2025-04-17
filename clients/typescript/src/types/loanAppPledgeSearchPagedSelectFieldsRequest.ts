import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppPledgeSingleSelectableFields } from "./loanAppPledgeSingleSelectableFields";
import { LoanAppPledgeSearchFilter } from "./loanAppPledgeSearchFilter";
import { VersionType } from "./versionType";

export interface LoanAppPledgeSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppPledgeSingleSelectableFields;
    searchFilter: LoanAppPledgeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}