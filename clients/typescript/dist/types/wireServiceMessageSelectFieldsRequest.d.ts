import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireServiceMessageSingleSelectableFields } from "./wireServiceMessageSingleSelectableFields";
import { VersionType } from "./versionType";
export interface WireServiceMessageSelectFieldsRequest {
    wireSequenceNumber: number | null;
    wireServiceMessageLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireServiceMessageSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
