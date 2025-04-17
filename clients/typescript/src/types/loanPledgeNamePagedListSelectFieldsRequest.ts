import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanPledgeNameSingleSelectableFields } from "./loanPledgeNameSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanPledgeNamePagedListSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanPledgeLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanPledgeNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}