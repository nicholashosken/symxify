import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrPersonSingleSelectableFields } from "./ctrPersonSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CtrPersonSelectFieldsRequest {
    ctrNumber: string;
    ctrPersonLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CtrPersonSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
