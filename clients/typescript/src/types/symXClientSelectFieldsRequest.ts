import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SymXClientSingleSelectableFields } from "./symXClientSingleSelectableFields";
import { VersionType } from "./versionType";

export interface SymXClientSelectFieldsRequest {
    symXClientInstanceId: number | null;
    symXClientSymXClientNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: SymXClientSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}