import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DisclosureSingleSelectableFields } from "./disclosureSingleSelectableFields";
import { VersionType } from "./versionType";

export interface DisclosureSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: DisclosureSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}