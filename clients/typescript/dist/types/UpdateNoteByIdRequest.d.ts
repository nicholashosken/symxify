import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NoteFields_2 } from "./noteFields_2";
import { VersionType } from "./versionType";
export interface UpdateNoteByIdRequest {
    accountNumber: string;
    noteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    noteFields: NoteFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
