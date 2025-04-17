import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrPersonSelectableFields } from "./ctrPersonSelectableFields";
import { CtrPersonChildrenFilter } from "./ctrPersonChildrenFilter";
import { VersionType } from "./versionType";
export interface CtrPersonSelectFieldsFilterChildrenRequest {
    ctrNumber: string;
    ctrPersonLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CtrPersonSelectableFields;
    childrenSearchFilter: CtrPersonChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
