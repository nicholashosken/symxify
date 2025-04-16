import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareAnalysisPlanSingleSelectableFields } from "./shareAnalysisPlanSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareAnalysisPlanSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    shareAnalysisPlanLocatorValue: number;
    shareAnalysisPlanLocatorValueSpecified: boolean;
    shareAnalysisPlanLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ShareAnalysisPlanSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
