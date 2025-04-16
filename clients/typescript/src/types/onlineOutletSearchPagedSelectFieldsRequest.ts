import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { OnlineOutletSingleSelectableFields } from "./onlineOutletSingleSelectableFields";
import { OnlineOutletSearchFilter } from "./onlineOutletSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface OnlineOutletSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: OnlineOutletSingleSelectableFields;
    searchFilter: OnlineOutletSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}