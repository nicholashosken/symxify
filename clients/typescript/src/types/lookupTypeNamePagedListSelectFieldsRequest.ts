import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LookupTypeNameSingleSelectableFields } from "./lookupTypeNameSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LookupTypeNamePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LookupTypeNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}