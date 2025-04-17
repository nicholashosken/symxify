import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcsServiceSingleSelectableFields } from "./acsServiceSingleSelectableFields";
import { VersionType } from "./versionType";
export interface AcsServiceSelectFieldsRequest {
    acsServiceAcsServiceType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: AcsServiceSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
