import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CardSelectableFields } from "./cardSelectableFields";
import { CardChildrenFilter } from "./cardChildrenFilter";
import { VersionType } from "./versionType";
export interface CardSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    cardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CardSelectableFields;
    childrenSearchFilter: CardChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
