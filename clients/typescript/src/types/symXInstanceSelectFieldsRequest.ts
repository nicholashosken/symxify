import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SymXInstanceSingleSelectableFields } from "./symXInstanceSingleSelectableFields";
import { VersionType } from "./versionType";

export interface SymXInstanceSelectFieldsRequest {
    symXInstanceInstanceId: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: SymXInstanceSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}