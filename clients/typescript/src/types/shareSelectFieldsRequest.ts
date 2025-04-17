import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareSingleSelectableFields } from "./shareSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ShareSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ShareSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}