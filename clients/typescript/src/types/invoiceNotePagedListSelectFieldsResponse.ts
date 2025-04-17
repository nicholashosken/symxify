import { InvoiceNote } from "./invoiceNote";
import { VersionType } from "./versionType";

export interface InvoiceNotePagedListSelectFieldsResponse {
    invoiceNote: InvoiceNote[];
    token: string;
    version1: VersionType;
    messageId: string;
}