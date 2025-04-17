import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CpWorkCardTrackingSingleSelectableFields } from "./cpWorkCardTrackingSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CpWorkCardTrackingSelectFieldsRequest {
    accountNumber: string;
    cpWorkCardLocator: number | null;
    cpWorkCardTrackingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CpWorkCardTrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
