import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrSelectableFields } from "./ctrSelectableFields";
import { CtrChildrenFilter } from "./ctrChildrenFilter";
import { VersionType } from "./versionType";
export interface CtrSelectFieldsFilterChildrenRequest {
    ctrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CtrSelectableFields;
    childrenSearchFilter: CtrChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
