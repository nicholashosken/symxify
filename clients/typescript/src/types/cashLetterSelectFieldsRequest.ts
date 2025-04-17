import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CashLetterSingleSelectableFields } from "./cashLetterSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CashLetterSelectFieldsRequest {
    cashLetterGlobalSequenceDate: string | null;
    cashLetterGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CashLetterSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}