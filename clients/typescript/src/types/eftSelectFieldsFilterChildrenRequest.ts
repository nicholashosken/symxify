import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EftSelectableFields } from "./eftSelectableFields";
import { EftChildrenFilter } from "./eftChildrenFilter";
import { VersionType } from "./versionType";

export interface EftSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    eftLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: EftSelectableFields;
    childrenSearchFilter: EftChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}