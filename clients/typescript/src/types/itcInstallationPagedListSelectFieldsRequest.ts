import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ItcInstallationSingleSelectableFields } from "./itcInstallationSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ItcInstallationPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ItcInstallationSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}