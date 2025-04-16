import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { InventoryDefaultSingleSelectableFields } from "./inventoryDefaultSingleSelectableFields";
import { InventoryDefaultSearchFilter } from "./inventoryDefaultSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface InventoryDefaultSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: InventoryDefaultSingleSelectableFields;
    searchFilter: InventoryDefaultSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
