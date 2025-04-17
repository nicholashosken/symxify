import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CorpTransferSingleSelectableFields } from "./corpTransferSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CorpTransferSelectFieldsRequest {
    corpTransferGlobalSequenceDate: string | null;
    corpTransferGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CorpTransferSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}