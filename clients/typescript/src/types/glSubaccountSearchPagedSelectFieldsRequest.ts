import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { GlSubaccountSingleSelectableFields } from "./glSubaccountSingleSelectableFields";
import { GlSubaccountSearchFilter } from "./glSubaccountSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlSubaccountSearchPagedSelectFieldsRequest {
    glAccountNumber: string;
    glAccountSuffix: string;
    glAccountBranch: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: GlSubaccountSingleSelectableFields;
    searchFilter: GlSubaccountSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}