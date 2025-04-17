import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NoteFields_2 } from "./noteFields_2";
import { VersionType } from "./versionType";

export interface CreateNoteRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    noteFields: NoteFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}