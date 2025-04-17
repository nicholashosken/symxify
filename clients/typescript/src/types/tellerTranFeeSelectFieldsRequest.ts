import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { TellerTranFeeSingleSelectableFields } from "./tellerTranFeeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface TellerTranFeeSelectFieldsRequest {
    tellerTranFeeFeeCode: number | null;
    tellerTranFeeTypeCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: TellerTranFeeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}