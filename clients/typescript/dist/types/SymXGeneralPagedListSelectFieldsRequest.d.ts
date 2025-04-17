import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { SymXGeneralSingleSelectableFields } from "./symXGeneralSingleSelectableFields";
import { VersionType } from "./versionType";
export interface SymXGeneralPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: SymXGeneralSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
