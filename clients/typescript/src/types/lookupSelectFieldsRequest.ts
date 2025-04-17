import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LookupSingleSelectableFields } from "./lookupSingleSelectableFields";
import { VersionType } from "./versionType";

export interface LookupSelectFieldsRequest {
    accountNumber: string;
    lookupLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LookupSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}