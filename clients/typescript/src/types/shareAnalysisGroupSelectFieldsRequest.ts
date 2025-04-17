import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareAnalysisGroupSingleSelectableFields } from "./shareAnalysisGroupSingleSelectableFields";
import { VersionType } from "./versionType";

export interface ShareAnalysisGroupSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    shareAnalysisGroupLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ShareAnalysisGroupSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}