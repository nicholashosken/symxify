import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { UserSelectableFields } from "./userSelectableFields";
import { UserChildrenFilter } from "./userChildrenFilter";
import { VersionType } from "./versionType";

export interface UserSelectFieldsFilterChildrenRequest {
    userNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: UserSelectableFields;
    childrenSearchFilter: UserChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}