import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { SymXDeviceMapSingleSelectableFields } from "./symXDeviceMapSingleSelectableFields";
import { SymXDeviceMapSearchFilter } from "./symXDeviceMapSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SymXDeviceMapSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: SymXDeviceMapSingleSelectableFields;
    searchFilter: SymXDeviceMapSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
