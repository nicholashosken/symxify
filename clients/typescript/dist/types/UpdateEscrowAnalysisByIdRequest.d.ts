import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EscrowAnalysisFields_2 } from "./escrowAnalysisFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateEscrowAnalysisByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    escrowAnalysisFields: EscrowAnalysisFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
