import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireTypeCodeSingleSelectableFields } from "./wireTypeCodeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireTypeCodeSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireTypeCodeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}