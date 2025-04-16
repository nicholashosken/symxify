import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PlanFieldNameSingleSelectableFields } from "./planFieldNameSingleSelectableFields";
import { PlanFieldNameSearchFilter } from "./planFieldNameSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PlanFieldNameSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PlanFieldNameSingleSelectableFields;
    searchFilter: PlanFieldNameSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
