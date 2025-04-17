import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrNoteFields_2 } from "./ctrNoteFields_2";
import { VersionType } from "./versionType";

export interface UpdateCtrNoteByIdRequest {
    ctrNumber: string;
    ctrNoteLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    ctrNoteFields: CtrNoteFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}