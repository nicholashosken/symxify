import { VendorFields } from "./vendorFields";
import { InvoiceSelectableFields } from "./invoiceSelectableFields";
import { VendorFmHistorySelectableFields } from "./vendorFmHistorySelectableFields";
import { VersionType } from "./versionType";
export interface VendorSelectableFields {
    includeAllVendorFields: boolean | null;
    vendorFields: VendorFields;
    invoiceSelectableFields: InvoiceSelectableFields;
    vendorFmHistorySelectableFields: VendorFmHistorySelectableFields;
    version1: VersionType;
}
