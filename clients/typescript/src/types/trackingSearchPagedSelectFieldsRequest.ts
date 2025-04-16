import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { TrackingSingleSelectableFields } from "./trackingSingleSelectableFields";
import { TrackingSearchFilter } from "./trackingSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface TrackingSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: TrackingSingleSelectableFields;
    searchFilter: TrackingSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}