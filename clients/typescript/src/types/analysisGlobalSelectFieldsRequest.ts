import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AnalysisGlobalSingleSelectableFields } from "./analysisGlobalSingleSelectableFields";
import { VersionType } from "./versionType";

export interface AnalysisGlobalSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: AnalysisGlobalSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}