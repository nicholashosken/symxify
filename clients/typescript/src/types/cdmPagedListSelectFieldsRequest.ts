import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CdmSingleSelectableFields } from "./cdmSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CdmPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CdmSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}