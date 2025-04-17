import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareAnalysisPlanSingleSelectableFields } from "./shareAnalysisPlanSingleSelectableFields";
import { VersionType } from "./versionType";
export interface ShareAnalysisPlanSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    shareAnalysisPlanLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ShareAnalysisPlanSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
