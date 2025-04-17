import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { TellerFeeSingleSelectableFields } from "./tellerFeeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface TellerFeePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: TellerFeeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
