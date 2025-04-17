import { Invoice } from "./invoice";
import { VersionType } from "./versionType";

export interface InvoiceSearchPagedSelectFieldsResponse {
    invoice: Invoice[];
    token: string;
    version1: VersionType;
    messageId: string;
}