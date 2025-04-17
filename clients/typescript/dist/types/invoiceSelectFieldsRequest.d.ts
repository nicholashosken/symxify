import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InvoiceSingleSelectableFields } from "./invoiceSingleSelectableFields";
import { VersionType } from "./versionType";
export interface InvoiceSelectFieldsRequest {
    vendorNumber: string;
    invoiceLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: InvoiceSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
