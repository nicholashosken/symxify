import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { GlCategorySingleSelectableFields } from "./glCategorySingleSelectableFields";
import { GlCategorySearchFilter } from "./glCategorySearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlCategorySearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: GlCategorySingleSelectableFields;
    searchFilter: GlCategorySearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
