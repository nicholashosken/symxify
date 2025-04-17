import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanCheckOrderSingleSelectableFields } from "./loanCheckOrderSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanCheckOrderPagedListSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanCheckOrderSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}