import { Invoice } from "./invoice";
import { VersionType } from "./versionType";
export interface InvoiceSelectFieldsFilterChildrenResponse {
    invoice: Invoice;
    version1: VersionType;
    messageId: string;
}
