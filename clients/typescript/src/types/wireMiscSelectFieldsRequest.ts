import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireMiscSingleSelectableFields } from "./wireMiscSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireMiscSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireMiscSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}