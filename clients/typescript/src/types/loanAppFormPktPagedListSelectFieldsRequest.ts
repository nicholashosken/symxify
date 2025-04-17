import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppFormPktSingleSelectableFields } from "./loanAppFormPktSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppFormPktPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppFormPktSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}