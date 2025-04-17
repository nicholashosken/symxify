import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppPrintAppSingleSelectableFields } from "./loanAppPrintAppSingleSelectableFields";
import { VersionType } from "./versionType";
export interface LoanAppPrintAppPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppPrintAppSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
