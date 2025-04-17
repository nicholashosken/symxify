import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ItcFraudSingleSelectableFields } from "./itcFraudSingleSelectableFields";
import { ItcFraudSearchFilter } from "./itcFraudSearchFilter";
import { VersionType } from "./versionType";
export interface ItcFraudSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ItcFraudSingleSelectableFields;
    searchFilter: ItcFraudSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
