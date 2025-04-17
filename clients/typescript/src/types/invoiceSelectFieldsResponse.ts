import { Invoice } from "./invoice";
import { VersionType } from "./versionType";

export interface InvoiceSelectFieldsResponse {
    invoice: Invoice;
    version1: VersionType;
    messageId: string;
}