import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareTrackingSingleSelectableFields } from "./shareTrackingSingleSelectableFields";
import { ShareTrackingSearchFilter } from "./shareTrackingSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareTrackingSearchPagedSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareTrackingSingleSelectableFields;
    searchFilter: ShareTrackingSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}