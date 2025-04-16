import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { OnlineBlockSingleSelectableFields } from "./onlineBlockSingleSelectableFields";
import { OnlineBlockSearchFilter } from "./onlineBlockSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineBlockSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: OnlineBlockSingleSelectableFields;
    searchFilter: OnlineBlockSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
