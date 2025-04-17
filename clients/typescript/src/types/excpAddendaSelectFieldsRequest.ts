import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExcpAddendaSingleSelectableFields } from "./excpAddendaSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ExcpAddendaSelectFieldsRequest {
    excpItemGlobalSequenceDate: string | null;
    excpItemGlobalSequence: number | null;
    excpAddendaLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ExcpAddendaSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}