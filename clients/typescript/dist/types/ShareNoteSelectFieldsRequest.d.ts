import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareNoteSingleSelectableFields } from "./shareNoteSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ShareNoteSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    shareNoteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ShareNoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
