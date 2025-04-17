import { Invoice } from "./invoice";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface InvoiceSearchPagedSelectFieldsResponse {
    invoice: Invoice[];
    invoiceSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
