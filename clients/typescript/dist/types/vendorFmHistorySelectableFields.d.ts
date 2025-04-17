import { VendorFmHistoryFields } from "./vendorFmHistoryFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface VendorFmHistorySelectableFields {
    includeAllVendorFmHistoryFieldsValue: boolean;
    includeAllVendorFmHistoryFieldsValueSpecified: boolean;
    includeAllVendorFmHistoryFields: boolean | null;
    vendorFmHistoryFields: VendorFmHistoryFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
