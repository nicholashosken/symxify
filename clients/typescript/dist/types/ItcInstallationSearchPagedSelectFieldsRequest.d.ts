import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ItcInstallationSingleSelectableFields } from "./itcInstallationSingleSelectableFields";
import { ItcInstallationSearchFilter } from "./itcInstallationSearchFilter";
import { VersionType } from "./versionType";
export interface ItcInstallationSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ItcInstallationSingleSelectableFields;
    searchFilter: ItcInstallationSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
