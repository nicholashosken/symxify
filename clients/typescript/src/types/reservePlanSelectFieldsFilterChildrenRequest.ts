import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ReservePlanSelectableFields } from "./reservePlanSelectableFields";
import { ReservePlanChildrenFilter } from "./reservePlanChildrenFilter";
import { VersionType } from "./versionType";

export interface ReservePlanSelectFieldsFilterChildrenRequest {
    dealerNumber: string;
    reservePlanId: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ReservePlanSelectableFields;
    childrenSearchFilter: ReservePlanChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}