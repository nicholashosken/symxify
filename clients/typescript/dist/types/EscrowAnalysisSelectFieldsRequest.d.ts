import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EscrowAnalysisSingleSelectableFields } from "./escrowAnalysisSingleSelectableFields";
import { VersionType } from "./versionType";
export interface EscrowAnalysisSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: EscrowAnalysisSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
