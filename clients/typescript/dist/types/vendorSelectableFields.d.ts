import { VendorFields } from "./vendorFields";
import { InvoiceSelectableFields } from "./invoiceSelectableFields";
import { VendorFmHistorySelectableFields } from "./vendorFmHistorySelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface VendorSelectableFields {
    includeAllVendorFieldsValue: boolean;
    includeAllVendorFieldsValueSpecified: boolean;
    includeAllVendorFields: boolean | null;
    vendorFields: VendorFields;
    invoiceSelectableFields: InvoiceSelectableFields;
    vendorFmHistorySelectableFields: VendorFmHistorySelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
