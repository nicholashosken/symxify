import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PartTrackingTypeSingleSelectableFields } from "./partTrackingTypeSingleSelectableFields";
import { PartTrackingTypeSearchFilter } from "./partTrackingTypeSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PartTrackingTypeSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PartTrackingTypeSingleSelectableFields;
    searchFilter: PartTrackingTypeSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}