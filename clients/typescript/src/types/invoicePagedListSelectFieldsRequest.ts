import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { InvoiceSingleSelectableFields } from "./invoiceSingleSelectableFields";
import { VersionType } from "./versionType";

export interface InvoicePagedListSelectFieldsRequest {
    vendorNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: InvoiceSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}