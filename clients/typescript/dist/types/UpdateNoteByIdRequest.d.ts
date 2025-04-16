import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NoteFields_2 } from "./noteFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateNoteByIdRequest {
    accountNumber: string;
    noteLocatorValue: number;
    noteLocatorValueSpecified: boolean;
    noteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    noteFields: NoteFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
