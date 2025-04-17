import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanRateChangeSingleSelectableFields } from "./loanRateChangeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanRateChangePagedListSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanRateChangeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
