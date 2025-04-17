import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareNoteFields_2 } from "./shareNoteFields_2";
import { VersionType } from "./versionType";

export interface UpdateShareNoteByIdRequest {
    accountNumber: string;
    shareId: string;
    shareNoteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareNoteFields: ShareNoteFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}