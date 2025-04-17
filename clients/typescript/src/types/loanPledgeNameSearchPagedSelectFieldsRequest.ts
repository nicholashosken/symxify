import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanPledgeNameSingleSelectableFields } from "./loanPledgeNameSingleSelectableFields";
import { LoanPledgeNameSearchFilter } from "./loanPledgeNameSearchFilter";
import { VersionType } from "./versionType";

export interface LoanPledgeNameSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanPledgeLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanPledgeNameSingleSelectableFields;
    searchFilter: LoanPledgeNameSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}