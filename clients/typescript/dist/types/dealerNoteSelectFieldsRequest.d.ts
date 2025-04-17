import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DealerNoteSingleSelectableFields } from "./dealerNoteSingleSelectableFields";
import { VersionType } from "./versionType";
export interface DealerNoteSelectFieldsRequest {
    dealerNumber: string;
    dealerNoteLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: DealerNoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
