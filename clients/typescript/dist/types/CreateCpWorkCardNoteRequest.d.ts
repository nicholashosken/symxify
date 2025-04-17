import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CpWorkCardNoteFields_2 } from "./cpWorkCardNoteFields_2";
import { VersionType } from "./versionType";
export interface CreateCpWorkCardNoteRequest {
    accountNumber: string;
    cpWorkCardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    cpWorkCardNoteFields: CpWorkCardNoteFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
