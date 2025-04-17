import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireSelectableFields } from "./wireSelectableFields";
import { WireChildrenFilter } from "./wireChildrenFilter";
import { VersionType } from "./versionType";
export interface WireSelectFieldsFilterChildrenRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireSelectableFields;
    childrenSearchFilter: WireChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
