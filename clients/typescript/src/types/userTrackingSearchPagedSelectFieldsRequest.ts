import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { UserTrackingSingleSelectableFields } from "./userTrackingSingleSelectableFields";
import { UserTrackingSearchFilter } from "./userTrackingSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UserTrackingSearchPagedSelectFieldsRequest {
    userNumberValue: number;
    userNumberValueSpecified: boolean;
    userNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: UserTrackingSingleSelectableFields;
    searchFilter: UserTrackingSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}