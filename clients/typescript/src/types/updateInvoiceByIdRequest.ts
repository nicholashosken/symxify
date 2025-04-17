import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InvoiceFields_2 } from "./invoiceFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateInvoiceByIdRequest {
    vendorNumber: string;
    invoiceLocatorValue: number;
    invoiceLocatorValueSpecified: boolean;
    invoiceLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    invoiceFields: InvoiceFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}