import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DocumentNumberFields_2 } from "./documentNumberFields_2";
import { VersionType } from "./versionType";
export interface UpdateDocumentNumberByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    documentNumberFields: DocumentNumberFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
