import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { TrackingCodeSingleSelectableFields } from "./trackingCodeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface TrackingCodeSelectFieldsRequest {
    trackingCodeCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: TrackingCodeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
