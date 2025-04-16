import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { GlTableSingleSelectableFields } from "./glTableSingleSelectableFields";
import { GlTableSearchFilter } from "./glTableSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlTableSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: GlTableSingleSelectableFields;
    searchFilter: GlTableSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}