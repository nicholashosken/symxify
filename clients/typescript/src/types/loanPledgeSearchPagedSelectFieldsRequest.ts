import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanPledgeSingleSelectableFields } from "./loanPledgeSingleSelectableFields";
import { LoanPledgeSearchFilter } from "./loanPledgeSearchFilter";
import { VersionType } from "./versionType";

export interface LoanPledgeSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanPledgeSingleSelectableFields;
    searchFilter: LoanPledgeSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}