import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DealerSelectableFields } from "./dealerSelectableFields";
import { DealerChildrenFilter } from "./dealerChildrenFilter";
import { VersionType } from "./versionType";
export interface DealerSelectFieldsFilterChildrenRequest {
    dealerNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: DealerSelectableFields;
    childrenSearchFilter: DealerChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
