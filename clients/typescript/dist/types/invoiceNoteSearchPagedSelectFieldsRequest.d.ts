import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { InvoiceNoteSingleSelectableFields } from "./invoiceNoteSingleSelectableFields";
import { InvoiceNoteSearchFilter } from "./invoiceNoteSearchFilter";
import { VersionType } from "./versionType";
export interface InvoiceNoteSearchPagedSelectFieldsRequest {
    vendorNumber: string;
    invoiceLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: InvoiceNoteSingleSelectableFields;
    searchFilter: InvoiceNoteSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
