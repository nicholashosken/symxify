import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareAnalysisFields_2 } from "./shareAnalysisFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateShareAnalysisByIdRequest {
    accountNumber: string;
    shareId: string;
    shareAnalysisLocatorValue: number;
    shareAnalysisLocatorValueSpecified: boolean;
    shareAnalysisLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareAnalysisFields: ShareAnalysisFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
