import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NoteSingleSelectableFields } from "./noteSingleSelectableFields";
import { VersionType } from "./versionType";

export interface NoteSelectFieldsRequest {
    accountNumber: string;
    noteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: NoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}