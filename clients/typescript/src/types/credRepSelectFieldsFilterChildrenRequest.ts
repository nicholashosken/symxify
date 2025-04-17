import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CredRepSelectableFields } from "./credRepSelectableFields";
import { CredRepChildrenFilter } from "./credRepChildrenFilter";
import { VersionType } from "./versionType";

export interface CredRepSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    credRepLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CredRepSelectableFields;
    childrenSearchFilter: CredRepChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}