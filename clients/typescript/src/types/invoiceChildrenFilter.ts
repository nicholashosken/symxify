import { InvoiceNoteFilter } from "./invoiceNoteFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InvoiceChildrenFilter {
    invoiceNoteFilter: InvoiceNoteFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}