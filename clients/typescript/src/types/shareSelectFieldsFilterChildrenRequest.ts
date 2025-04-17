import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareSelectableFields } from "./shareSelectableFields";
import { ShareChildrenFilter } from "./shareChildrenFilter";
import { VersionType } from "./versionType";

export interface ShareSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ShareSelectableFields;
    childrenSearchFilter: ShareChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}