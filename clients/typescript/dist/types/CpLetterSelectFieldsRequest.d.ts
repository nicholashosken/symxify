import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CpLetterSingleSelectableFields } from "./cpLetterSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CpLetterSelectFieldsRequest {
    cpLetterLetterCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CpLetterSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
