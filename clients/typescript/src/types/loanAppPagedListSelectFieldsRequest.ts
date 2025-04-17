import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppSingleSelectableFields } from "./loanAppSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppPagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}