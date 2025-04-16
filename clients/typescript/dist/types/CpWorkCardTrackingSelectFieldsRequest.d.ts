import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CpWorkCardTrackingSingleSelectableFields } from "./cpWorkCardTrackingSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CpWorkCardTrackingSelectFieldsRequest {
    accountNumber: string;
    cpWorkCardLocatorValue: number;
    cpWorkCardLocatorValueSpecified: boolean;
    cpWorkCardLocator: number | null;
    cpWorkCardTrackingLocatorValue: number;
    cpWorkCardTrackingLocatorValueSpecified: boolean;
    cpWorkCardTrackingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CpWorkCardTrackingSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
