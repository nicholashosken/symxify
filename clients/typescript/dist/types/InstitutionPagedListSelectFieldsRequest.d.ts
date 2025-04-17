import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { InstitutionSingleSelectableFields } from "./institutionSingleSelectableFields";
import { VersionType } from "./versionType";
export interface InstitutionPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: InstitutionSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
