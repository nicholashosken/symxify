import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { SymXInstanceSingleSelectableFields } from "./symXInstanceSingleSelectableFields";
import { VersionType } from "./versionType";
export interface SymXInstancePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: SymXInstanceSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
