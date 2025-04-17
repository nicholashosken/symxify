import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { TellerTranValidateSingleSelectableFields } from "./tellerTranValidateSingleSelectableFields";
import { VersionType } from "./versionType";
export interface TellerTranValidateSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: TellerTranValidateSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
