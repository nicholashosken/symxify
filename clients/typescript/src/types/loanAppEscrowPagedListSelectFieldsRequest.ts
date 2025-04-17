import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppEscrowSingleSelectableFields } from "./loanAppEscrowSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppEscrowPagedListSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppEscrowSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}