import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DocTypeDefaultSingleSelectableFields } from "./docTypeDefaultSingleSelectableFields";
import { VersionType } from "./versionType";

export interface DocTypeDefaultSelectFieldsRequest {
    docTypeDefaultDocumentType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: DocTypeDefaultSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}