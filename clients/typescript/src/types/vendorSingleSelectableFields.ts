import { VendorFields } from "./vendorFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface VendorSingleSelectableFields {
    includeAllVendorFieldsValue: boolean;
    includeAllVendorFieldsValueSpecified: boolean;
    includeAllVendorFields: boolean | null;
    vendorFields: VendorFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}