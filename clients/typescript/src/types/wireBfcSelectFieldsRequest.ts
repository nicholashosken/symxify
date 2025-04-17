import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireBfcSingleSelectableFields } from "./wireBfcSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireBfcSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireBfcSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}