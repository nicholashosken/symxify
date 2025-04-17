import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanTransactionSingleSelectableFields } from "./loanTransactionSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanTransactionPagedListSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanTransactionSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}