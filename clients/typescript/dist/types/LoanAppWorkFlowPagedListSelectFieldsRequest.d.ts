import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppWorkFlowSingleSelectableFields } from "./loanAppWorkFlowSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanAppWorkFlowPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppWorkFlowSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
