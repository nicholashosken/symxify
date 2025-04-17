import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InvoiceNoteSingleSelectableFields } from "./invoiceNoteSingleSelectableFields";
import { VersionType } from "./versionType";

export interface InvoiceNoteSelectFieldsRequest {
    vendorNumber: string;
    invoiceLocator: number | null;
    invoiceNoteLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: InvoiceNoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}