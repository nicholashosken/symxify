import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanHoldSingleSelectableFields } from "./loanHoldSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanHoldPagedListSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanHoldSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
