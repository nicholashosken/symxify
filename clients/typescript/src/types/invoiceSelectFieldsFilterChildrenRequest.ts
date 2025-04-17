import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InvoiceSelectableFields } from "./invoiceSelectableFields";
import { InvoiceChildrenFilter } from "./invoiceChildrenFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InvoiceSelectFieldsFilterChildrenRequest {
    vendorNumber: string;
    invoiceLocatorValue: number;
    invoiceLocatorValueSpecified: boolean;
    invoiceLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: InvoiceSelectableFields;
    childrenSearchFilter: InvoiceChildrenFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}