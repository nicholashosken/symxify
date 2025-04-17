import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExcpItemSelectableFields } from "./excpItemSelectableFields";
import { ExcpItemChildrenFilter } from "./excpItemChildrenFilter";
import { VersionType } from "./versionType";
export interface ExcpItemSelectFieldsFilterChildrenRequest {
    excpItemGlobalSequenceDate: string | null;
    excpItemGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ExcpItemSelectableFields;
    childrenSearchFilter: ExcpItemChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
