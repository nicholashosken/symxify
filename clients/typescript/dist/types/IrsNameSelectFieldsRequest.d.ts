import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { IrsNameSingleSelectableFields } from "./irsNameSingleSelectableFields";
import { VersionType } from "./versionType";
export interface IrsNameSelectFieldsRequest {
    accountNumber: string;
    irsLocator: number | null;
    irsNameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: IrsNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
