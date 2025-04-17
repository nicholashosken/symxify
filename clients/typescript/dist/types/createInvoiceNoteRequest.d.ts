import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InvoiceNoteFields_2 } from "./invoiceNoteFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CreateInvoiceNoteRequest {
    vendorNumber: string;
    invoiceLocatorValue: number;
    invoiceLocatorValueSpecified: boolean;
    invoiceLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    invoiceNoteFields: InvoiceNoteFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
