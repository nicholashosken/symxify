import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WorkFlowRepGenSingleSelectableFields } from "./workFlowRepGenSingleSelectableFields";
import { WorkFlowRepGenSearchFilter } from "./workFlowRepGenSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WorkFlowRepGenSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WorkFlowRepGenSingleSelectableFields;
    searchFilter: WorkFlowRepGenSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
