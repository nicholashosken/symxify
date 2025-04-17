import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { VendorFields_2 } from "./vendorFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateVendorByIdRequest {
    vendorNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    vendorFields: VendorFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
