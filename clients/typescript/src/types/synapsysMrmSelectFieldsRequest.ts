import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SynapsysMrmSingleSelectableFields } from "./synapsysMrmSingleSelectableFields";
import { VersionType } from "./versionType";

export interface SynapsysMrmSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: SynapsysMrmSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}