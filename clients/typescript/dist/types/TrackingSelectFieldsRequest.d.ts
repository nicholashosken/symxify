import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { TrackingSingleSelectableFields } from "./trackingSingleSelectableFields";
import { VersionType } from "./versionType";
export interface TrackingSelectFieldsRequest {
    accountNumber: string;
    trackingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: TrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
