import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { OnlineFileSingleSelectableFields } from "./onlineFileSingleSelectableFields";
import { OnlineFileSearchFilter } from "./onlineFileSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OnlineFileSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: OnlineFileSingleSelectableFields;
    searchFilter: OnlineFileSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}