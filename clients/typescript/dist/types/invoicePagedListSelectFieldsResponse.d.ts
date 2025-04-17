import { Invoice } from "./invoice";
import { VersionType } from "./versionType";
export interface InvoicePagedListSelectFieldsResponse {
    invoice: Invoice[];
    token: string;
    version1: VersionType;
    messageId: string;
}
