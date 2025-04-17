import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DealerTrackingSingleSelectableFields } from "./dealerTrackingSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DealerTrackingSelectFieldsRequest {
    dealerNumber: string;
    dealerTrackingLocatorValue: number;
    dealerTrackingLocatorValueSpecified: boolean;
    dealerTrackingLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: DealerTrackingSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
