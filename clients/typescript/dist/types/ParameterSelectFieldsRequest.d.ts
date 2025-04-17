import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ParameterSingleSelectableFields } from "./parameterSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ParameterSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ParameterSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
