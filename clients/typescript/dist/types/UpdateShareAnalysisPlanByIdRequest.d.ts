import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareAnalysisPlanFields_2 } from "./shareAnalysisPlanFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateShareAnalysisPlanByIdRequest {
    accountNumber: string;
    shareId: string;
    shareAnalysisPlanLocatorValue: number;
    shareAnalysisPlanLocatorValueSpecified: boolean;
    shareAnalysisPlanLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareAnalysisPlanFields: ShareAnalysisPlanFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
