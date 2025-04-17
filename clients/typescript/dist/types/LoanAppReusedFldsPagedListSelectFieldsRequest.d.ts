import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppReusedFldsSingleSelectableFields } from "./loanAppReusedFldsSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanAppReusedFldsPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppReusedFldsSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
