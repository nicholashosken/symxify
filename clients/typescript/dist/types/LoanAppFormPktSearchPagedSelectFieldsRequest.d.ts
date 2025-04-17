import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppFormPktSingleSelectableFields } from "./loanAppFormPktSingleSelectableFields";
import { LoanAppFormPktSearchFilter } from "./loanAppFormPktSearchFilter";
import { VersionType } from "./versionType";
export interface LoanAppFormPktSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppFormPktSingleSelectableFields;
    searchFilter: LoanAppFormPktSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
