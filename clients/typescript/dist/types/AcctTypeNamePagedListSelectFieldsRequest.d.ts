import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { AcctTypeNameSingleSelectableFields } from "./acctTypeNameSingleSelectableFields";
import { VersionType } from "./versionType";
export interface AcctTypeNamePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: AcctTypeNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
