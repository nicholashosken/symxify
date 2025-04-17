import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareHoldSingleSelectableFields } from "./shareHoldSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ShareHoldSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    shareHoldLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ShareHoldSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
