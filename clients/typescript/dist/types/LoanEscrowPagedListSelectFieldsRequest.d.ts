import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanEscrowSingleSelectableFields } from "./loanEscrowSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanEscrowPagedListSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanEscrowSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
