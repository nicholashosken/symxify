import { InvoiceFilter } from "./invoiceFilter";
import { VendorFmHistoryFilter } from "./vendorFmHistoryFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface VendorChildrenFilter {
    invoiceFilter: InvoiceFilter;
    vendorFmHistoryFilter: VendorFmHistoryFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}