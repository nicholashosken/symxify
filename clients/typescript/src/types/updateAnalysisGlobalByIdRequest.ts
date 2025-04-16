import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AnalysisGlobalFields_2 } from "./analysisGlobalFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateAnalysisGlobalByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    analysisGlobalFields: AnalysisGlobalFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}