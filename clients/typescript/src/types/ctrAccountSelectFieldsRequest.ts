import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrAccountSingleSelectableFields } from "./ctrAccountSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CtrAccountSelectFieldsRequest {
    ctrNumber: string;
    ctrAccountLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CtrAccountSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}