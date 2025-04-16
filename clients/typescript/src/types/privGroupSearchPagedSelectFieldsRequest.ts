import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PrivGroupSingleSelectableFields } from "./privGroupSingleSelectableFields";
import { PrivGroupSearchFilter } from "./privGroupSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PrivGroupSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PrivGroupSingleSelectableFields;
    searchFilter: PrivGroupSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}