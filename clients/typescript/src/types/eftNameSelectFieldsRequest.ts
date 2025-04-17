import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EftNameSingleSelectableFields } from "./eftNameSingleSelectableFields";
import { VersionType } from "./versionType";

export interface EftNameSelectFieldsRequest {
    accountNumber: string;
    eftLocator: number | null;
    eftNameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: EftNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}