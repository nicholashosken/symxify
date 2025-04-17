import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ItcFraudSingleSelectableFields } from "./itcFraudSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ItcFraudPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ItcFraudSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
