import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ReservePlanTrackingSingleSelectableFields } from "./reservePlanTrackingSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ReservePlanTrackingSelectFieldsRequest {
    dealerNumber: string;
    reservePlanId: string;
    reservePlanTrackingLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ReservePlanTrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}