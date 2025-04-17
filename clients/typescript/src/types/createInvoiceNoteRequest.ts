import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InvoiceNoteFields_2 } from "./invoiceNoteFields_2";
import { VersionType } from "./versionType";

export interface CreateInvoiceNoteRequest {
    vendorNumber: string;
    invoiceLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    invoiceNoteFields: InvoiceNoteFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}