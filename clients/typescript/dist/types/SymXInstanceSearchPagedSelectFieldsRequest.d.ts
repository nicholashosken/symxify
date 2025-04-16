import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { SymXInstanceSingleSelectableFields } from "./symXInstanceSingleSelectableFields";
import { SymXInstanceSearchFilter } from "./symXInstanceSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SymXInstanceSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: SymXInstanceSingleSelectableFields;
    searchFilter: SymXInstanceSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
