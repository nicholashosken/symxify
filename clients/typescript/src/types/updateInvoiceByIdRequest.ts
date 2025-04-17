import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InvoiceFields_2 } from "./invoiceFields_2";
import { VersionType } from "./versionType";

export interface UpdateInvoiceByIdRequest {
    vendorNumber: string;
    invoiceLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    invoiceFields: InvoiceFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}