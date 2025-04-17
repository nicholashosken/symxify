import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanLnSegmentSingleSelectableFields } from "./loanLnSegmentSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanLnSegmentPagedListSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanLnSegmentSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}