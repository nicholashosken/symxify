import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { InqDefinitionSingleSelectableFields } from "./inqDefinitionSingleSelectableFields";
import { InqDefinitionSearchFilter } from "./inqDefinitionSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InqDefinitionSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: InqDefinitionSingleSelectableFields;
    searchFilter: InqDefinitionSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}