import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanLnSegmentBillingSingleSelectableFields } from "./loanLnSegmentBillingSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanLnSegmentBillingPagedListSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanLnSegmentId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanLnSegmentBillingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}