import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { InvoiceNoteSingleSelectableFields } from "./invoiceNoteSingleSelectableFields";
import { InvoiceNoteSearchFilter } from "./invoiceNoteSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InvoiceNoteSearchPagedSelectFieldsRequest {
    vendorNumber: string;
    invoiceLocatorValue: number;
    invoiceLocatorValueSpecified: boolean;
    invoiceLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: InvoiceNoteSingleSelectableFields;
    searchFilter: InvoiceNoteSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}