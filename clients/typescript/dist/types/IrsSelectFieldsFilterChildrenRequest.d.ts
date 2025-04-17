import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IrsSelectableFields } from "./irsSelectableFields";
import { IrsChildrenFilter } from "./irsChildrenFilter";
import { VersionType } from "./versionType";
export interface IrsSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    irsLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: IrsSelectableFields;
    childrenSearchFilter: IrsChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
