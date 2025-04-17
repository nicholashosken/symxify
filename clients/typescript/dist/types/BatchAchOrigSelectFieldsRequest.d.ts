import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { BatchAchOrigSingleSelectableFields } from "./batchAchOrigSingleSelectableFields";
import { VersionType } from "./versionType";
export interface BatchAchOrigSelectFieldsRequest {
    accountNumber: string;
    batchAchOrigLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: BatchAchOrigSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
