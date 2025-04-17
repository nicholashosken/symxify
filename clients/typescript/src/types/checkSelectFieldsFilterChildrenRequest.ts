import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CheckSelectableFields } from "./checkSelectableFields";
import { CheckChildrenFilter } from "./checkChildrenFilter";
import { VersionType } from "./versionType";

export interface CheckSelectFieldsFilterChildrenRequest {
    checkGlobalSequenceDate: string | null;
    checkGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CheckSelectableFields;
    childrenSearchFilter: CheckChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}