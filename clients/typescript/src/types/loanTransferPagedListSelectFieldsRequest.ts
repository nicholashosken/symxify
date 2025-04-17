import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanTransferSingleSelectableFields } from "./loanTransferSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanTransferPagedListSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanTransferSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}