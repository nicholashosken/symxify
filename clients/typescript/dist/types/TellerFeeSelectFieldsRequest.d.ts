import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { TellerFeeSingleSelectableFields } from "./tellerFeeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface TellerFeeSelectFieldsRequest {
    tellerFeeTellerTransactionFeeType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: TellerFeeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
