import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AnalysisPlanSingleSelectableFields } from "./analysisPlanSingleSelectableFields";
import { VersionType } from "./versionType";

export interface AnalysisPlanSelectFieldsRequest {
    analysisPlanIndexAnalysisPlan: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: AnalysisPlanSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}