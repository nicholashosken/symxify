import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CredRepSingleSelectableFields } from "./credRepSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CredRepSelectFieldsRequest {
    accountNumber: string;
    credRepLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CredRepSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}