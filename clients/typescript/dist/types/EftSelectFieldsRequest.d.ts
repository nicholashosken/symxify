import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EftSingleSelectableFields } from "./eftSingleSelectableFields";
import { VersionType } from "./versionType";
export interface EftSelectFieldsRequest {
    accountNumber: string;
    eftLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: EftSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
