import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanPledgeSingleSelectableFields } from "./loanPledgeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanPledgePagedListSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanPledgeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}