import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EpisysDbExtractSingleSelectableFields } from "./episysDbExtractSingleSelectableFields";
import { VersionType } from "./versionType";
export interface EpisysDbExtractSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: EpisysDbExtractSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
