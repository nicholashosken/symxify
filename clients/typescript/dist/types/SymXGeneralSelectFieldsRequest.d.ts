import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SymXGeneralSingleSelectableFields } from "./symXGeneralSingleSelectableFields";
import { VersionType } from "./versionType";
export interface SymXGeneralSelectFieldsRequest {
    symXGeneralInstanceId: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: SymXGeneralSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
