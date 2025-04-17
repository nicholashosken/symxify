import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ReservePlanTrackingSingleSelectableFields } from "./reservePlanTrackingSingleSelectableFields";
import { ReservePlanTrackingSearchFilter } from "./reservePlanTrackingSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ReservePlanTrackingSearchPagedSelectFieldsRequest {
    dealerNumber: string;
    reservePlanId: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ReservePlanTrackingSingleSelectableFields;
    searchFilter: ReservePlanTrackingSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
