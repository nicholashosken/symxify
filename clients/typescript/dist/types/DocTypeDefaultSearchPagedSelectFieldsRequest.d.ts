import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { DocTypeDefaultSingleSelectableFields } from "./docTypeDefaultSingleSelectableFields";
import { DocTypeDefaultSearchFilter } from "./docTypeDefaultSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DocTypeDefaultSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: DocTypeDefaultSingleSelectableFields;
    searchFilter: DocTypeDefaultSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
