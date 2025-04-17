import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DealerTrackingSingleSelectableFields } from "./dealerTrackingSingleSelectableFields";
import { VersionType } from "./versionType";
export interface DealerTrackingSelectFieldsRequest {
    dealerNumber: string;
    dealerTrackingLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: DealerTrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
