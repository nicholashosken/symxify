import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppCopiedFldsSingleSelectableFields } from "./loanAppCopiedFldsSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanAppCopiedFldsPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppCopiedFldsSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
