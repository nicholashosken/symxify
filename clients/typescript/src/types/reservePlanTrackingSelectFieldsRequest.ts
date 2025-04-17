import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ReservePlanTrackingSingleSelectableFields } from "./reservePlanTrackingSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ReservePlanTrackingSelectFieldsRequest {
    dealerNumber: string;
    reservePlanId: string;
    reservePlanTrackingLocatorValue: number;
    reservePlanTrackingLocatorValueSpecified: boolean;
    reservePlanTrackingLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ReservePlanTrackingSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}