import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanFieldNameSingleSelectableFields } from "./loanFieldNameSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanFieldNamePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanFieldNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
