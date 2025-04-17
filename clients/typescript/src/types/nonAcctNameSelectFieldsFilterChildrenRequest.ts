import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NonAcctNameSelectableFields } from "./nonAcctNameSelectableFields";
import { NonAcctNameChildrenFilter } from "./nonAcctNameChildrenFilter";
import { VersionType } from "./versionType";

export interface NonAcctNameSelectFieldsFilterChildrenRequest {
    nonAcctNameNonAcctNameNum: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: NonAcctNameSelectableFields;
    childrenSearchFilter: NonAcctNameChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}