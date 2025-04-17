import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { YellowHammerSingleSelectableFields } from "./yellowHammerSingleSelectableFields";
import { VersionType } from "./versionType";

export interface YellowHammerSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: YellowHammerSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}