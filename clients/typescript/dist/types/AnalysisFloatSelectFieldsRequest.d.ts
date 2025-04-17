import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AnalysisFloatSingleSelectableFields } from "./analysisFloatSingleSelectableFields";
import { VersionType } from "./versionType";
export interface AnalysisFloatSelectFieldsRequest {
    analysisFloatBranch: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: AnalysisFloatSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
