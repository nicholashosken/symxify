import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DivIndexLocalSingleSelectableFields } from "./divIndexLocalSingleSelectableFields";
import { VersionType } from "./versionType";

export interface DivIndexLocalSelectFieldsRequest {
    divIndexLocalDividendIndexTable: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: DivIndexLocalSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}