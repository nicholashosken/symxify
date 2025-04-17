import { InvoiceFilter } from "./invoiceFilter";
import { VendorFmHistoryFilter } from "./vendorFmHistoryFilter";
import { VersionType } from "./versionType";
export interface VendorChildrenFilter {
    invoiceFilter: InvoiceFilter;
    vendorFmHistoryFilter: VendorFmHistoryFilter;
    version1: VersionType;
}
