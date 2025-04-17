import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanSingleSelectableFields } from "./loanSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanPagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}