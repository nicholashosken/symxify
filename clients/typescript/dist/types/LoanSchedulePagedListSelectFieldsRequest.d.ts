import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanScheduleSingleSelectableFields } from "./loanScheduleSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanSchedulePagedListSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanScheduleSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
