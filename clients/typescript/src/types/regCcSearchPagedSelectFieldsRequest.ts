import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { RegCcSingleSelectableFields } from "./regCcSingleSelectableFields";
import { RegCcSearchFilter } from "./regCcSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface RegCcSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: RegCcSingleSelectableFields;
    searchFilter: RegCcSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}