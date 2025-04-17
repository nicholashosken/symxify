import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { DealerTrackingSingleSelectableFields } from "./dealerTrackingSingleSelectableFields";
import { DealerTrackingSearchFilter } from "./dealerTrackingSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DealerTrackingSearchPagedSelectFieldsRequest {
    dealerNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: DealerTrackingSingleSelectableFields;
    searchFilter: DealerTrackingSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
