import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ReservePlanSingleSelectableFields } from "./reservePlanSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ReservePlanSelectFieldsRequest {
    dealerNumber: string;
    reservePlanId: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ReservePlanSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
