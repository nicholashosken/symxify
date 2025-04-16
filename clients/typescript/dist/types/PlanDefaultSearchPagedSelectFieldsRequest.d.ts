import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PlanDefaultSingleSelectableFields } from "./planDefaultSingleSelectableFields";
import { PlanDefaultSearchFilter } from "./planDefaultSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PlanDefaultSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PlanDefaultSingleSelectableFields;
    searchFilter: PlanDefaultSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
