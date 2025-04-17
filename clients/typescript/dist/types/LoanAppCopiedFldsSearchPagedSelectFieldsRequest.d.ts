import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppCopiedFldsSingleSelectableFields } from "./loanAppCopiedFldsSingleSelectableFields";
import { LoanAppCopiedFldsSearchFilter } from "./loanAppCopiedFldsSearchFilter";
import { VersionType } from "./versionType";
export interface LoanAppCopiedFldsSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppCopiedFldsSingleSelectableFields;
    searchFilter: LoanAppCopiedFldsSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
