import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppVerFormSingleSelectableFields } from "./loanAppVerFormSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LoanAppVerFormPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppVerFormSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}