import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { GlAccountTrackingSingleSelectableFields } from "./glAccountTrackingSingleSelectableFields";
import { GlAccountTrackingSearchFilter } from "./glAccountTrackingSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlAccountTrackingSearchPagedSelectFieldsRequest {
    glAccountNumber: string;
    glAccountSuffix: string;
    glAccountBranch: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: GlAccountTrackingSingleSelectableFields;
    searchFilter: GlAccountTrackingSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
