import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CtrForeignSingleSelectableFields } from "./ctrForeignSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CtrForeignPagedListSelectFieldsRequest {
    ctrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CtrForeignSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}