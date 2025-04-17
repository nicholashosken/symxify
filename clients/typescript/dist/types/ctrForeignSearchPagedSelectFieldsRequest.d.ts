import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CtrForeignSingleSelectableFields } from "./ctrForeignSingleSelectableFields";
import { CtrForeignSearchFilter } from "./ctrForeignSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CtrForeignSearchPagedSelectFieldsRequest {
    ctrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CtrForeignSingleSelectableFields;
    searchFilter: CtrForeignSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
