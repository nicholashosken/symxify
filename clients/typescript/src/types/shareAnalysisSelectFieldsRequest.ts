import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareAnalysisSingleSelectableFields } from "./shareAnalysisSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ShareAnalysisSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    shareAnalysisLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ShareAnalysisSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}