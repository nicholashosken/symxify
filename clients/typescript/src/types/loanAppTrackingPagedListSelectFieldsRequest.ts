import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppTrackingSingleSelectableFields } from "./loanAppTrackingSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppTrackingPagedListSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppTrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}