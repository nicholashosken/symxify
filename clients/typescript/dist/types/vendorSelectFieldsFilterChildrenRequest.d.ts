import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { VendorSelectableFields } from "./vendorSelectableFields";
import { VendorChildrenFilter } from "./vendorChildrenFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface VendorSelectFieldsFilterChildrenRequest {
    vendorNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: VendorSelectableFields;
    childrenSearchFilter: VendorChildrenFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
