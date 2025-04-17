import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { DocTypeDefaultSingleSelectableFields } from "./docTypeDefaultSingleSelectableFields";
import { VersionType } from "./versionType";
export interface DocTypeDefaultPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: DocTypeDefaultSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
