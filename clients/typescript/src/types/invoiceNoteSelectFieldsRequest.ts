import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InvoiceNoteSingleSelectableFields } from "./invoiceNoteSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InvoiceNoteSelectFieldsRequest {
    vendorNumber: string;
    invoiceLocatorValue: number;
    invoiceLocatorValueSpecified: boolean;
    invoiceLocator: number | null;
    invoiceNoteLocatorValue: number;
    invoiceNoteLocatorValueSpecified: boolean;
    invoiceNoteLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: InvoiceNoteSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}