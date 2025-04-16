import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareAnalysisGroupSingleSelectableFields } from "./shareAnalysisGroupSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareAnalysisGroupSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    shareAnalysisGroupLocatorValue: number;
    shareAnalysisGroupLocatorValueSpecified: boolean;
    shareAnalysisGroupLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ShareAnalysisGroupSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
