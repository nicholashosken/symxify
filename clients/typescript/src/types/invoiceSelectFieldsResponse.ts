import { Invoice } from "./invoice";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InvoiceSelectFieldsResponse {
    invoice: Invoice;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}