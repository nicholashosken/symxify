import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireSingleSelectableFields } from "./wireSingleSelectableFields";
import { VersionType } from "./versionType";
export interface WireSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
