import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DocumentNumberSingleSelectableFields } from "./documentNumberSingleSelectableFields";
import { VersionType } from "./versionType";
export interface DocumentNumberSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: DocumentNumberSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
