import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireIdCodeSingleSelectableFields } from "./wireIdCodeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireIdCodeSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireIdCodeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}