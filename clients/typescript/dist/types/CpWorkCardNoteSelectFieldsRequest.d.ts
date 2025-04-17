import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CpWorkCardNoteSingleSelectableFields } from "./cpWorkCardNoteSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CpWorkCardNoteSelectFieldsRequest {
    accountNumber: string;
    cpWorkCardLocator: number | null;
    cpWorkCardNoteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CpWorkCardNoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
