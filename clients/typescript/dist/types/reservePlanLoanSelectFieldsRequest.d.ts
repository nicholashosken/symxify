import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ReservePlanLoanSingleSelectableFields } from "./reservePlanLoanSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ReservePlanLoanSelectFieldsRequest {
    dealerNumber: string;
    reservePlanId: string;
    reservePlanLoanLocatorValue: number;
    reservePlanLoanLocatorValueSpecified: boolean;
    reservePlanLoanLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ReservePlanLoanSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
