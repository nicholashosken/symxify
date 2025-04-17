import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InvoiceSelectableFields } from "./invoiceSelectableFields";
import { InvoiceChildrenFilter } from "./invoiceChildrenFilter";
import { VersionType } from "./versionType";

export interface InvoiceSelectFieldsFilterChildrenRequest {
    vendorNumber: string;
    invoiceLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: InvoiceSelectableFields;
    childrenSearchFilter: InvoiceChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}