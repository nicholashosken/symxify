import { InvoiceNote } from "./invoiceNote";
import { VersionType } from "./versionType";

export interface InvoiceNoteSearchPagedSelectFieldsResponse {
    invoiceNote: InvoiceNote[];
    token: string;
    version1: VersionType;
    messageId: string;
}