import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ActivitySingleSelectableFields } from "./activitySingleSelectableFields";
import { ActivitySearchFilter } from "./activitySearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ActivitySearchPagedSelectFieldsRequest {
    userNumberValue: number;
    userNumberValueSpecified: boolean;
    userNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ActivitySingleSelectableFields;
    searchFilter: ActivitySearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}