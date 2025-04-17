import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrNoteSingleSelectableFields } from "./ctrNoteSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CtrNoteSelectFieldsRequest {
    ctrNumber: string;
    ctrNoteLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CtrNoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}