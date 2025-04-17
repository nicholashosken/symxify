import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppLnSegmentSingleSelectableFields } from "./loanAppLnSegmentSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppLnSegmentPagedListSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppLnSegmentSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}