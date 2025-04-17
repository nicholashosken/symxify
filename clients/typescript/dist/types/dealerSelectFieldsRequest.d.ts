import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DealerSingleSelectableFields } from "./dealerSingleSelectableFields";
import { VersionType } from "./versionType";
export interface DealerSelectFieldsRequest {
    dealerNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: DealerSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
