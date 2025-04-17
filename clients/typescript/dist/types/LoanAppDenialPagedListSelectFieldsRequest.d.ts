import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppDenialSingleSelectableFields } from "./loanAppDenialSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanAppDenialPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppDenialSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
