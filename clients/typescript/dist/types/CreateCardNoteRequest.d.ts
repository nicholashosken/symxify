import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CardNoteFields_2 } from "./cardNoteFields_2";
import { VersionType } from "./versionType";
export interface CreateCardNoteRequest {
    accountNumber: string;
    cardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    cardNoteFields: CardNoteFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
