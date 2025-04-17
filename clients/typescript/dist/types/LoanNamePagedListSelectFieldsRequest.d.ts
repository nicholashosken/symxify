import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanNameSingleSelectableFields } from "./loanNameSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanNamePagedListSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
