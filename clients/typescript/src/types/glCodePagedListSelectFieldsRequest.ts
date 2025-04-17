import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { GlCodeSingleSelectableFields } from "./glCodeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface GlCodePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: GlCodeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}