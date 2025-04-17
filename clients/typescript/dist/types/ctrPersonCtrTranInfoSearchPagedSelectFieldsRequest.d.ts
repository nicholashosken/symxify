import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CtrPersonCtrTranInfoSingleSelectableFields } from "./ctrPersonCtrTranInfoSingleSelectableFields";
import { CtrPersonCtrTranInfoSearchFilter } from "./ctrPersonCtrTranInfoSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CtrPersonCtrTranInfoSearchPagedSelectFieldsRequest {
    ctrNumber: string;
    ctrPersonLocatorValue: number;
    ctrPersonLocatorValueSpecified: boolean;
    ctrPersonLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CtrPersonCtrTranInfoSingleSelectableFields;
    searchFilter: CtrPersonCtrTranInfoSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
