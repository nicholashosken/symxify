import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareAnalysisGroupFields_2 } from "./shareAnalysisGroupFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateShareAnalysisGroupByIdRequest {
    accountNumber: string;
    shareId: string;
    shareAnalysisGroupLocatorValue: number;
    shareAnalysisGroupLocatorValueSpecified: boolean;
    shareAnalysisGroupLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareAnalysisGroupFields: ShareAnalysisGroupFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}