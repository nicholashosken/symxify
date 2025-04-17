import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CtrAccountSingleSelectableFields } from "./ctrAccountSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CtrAccountPagedListSelectFieldsRequest {
    ctrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CtrAccountSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}