import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DocTypeDefaultFields_2 } from "./docTypeDefaultFields_2";
import { VersionType } from "./versionType";
export interface UpdateDocTypeDefaultByIdRequest {
    docTypeDefaultDocumentType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    docTypeDefaultFields: DocTypeDefaultFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
