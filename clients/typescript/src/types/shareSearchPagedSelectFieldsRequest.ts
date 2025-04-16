import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ShareSingleSelectableFields } from "./shareSingleSelectableFields";
import { ShareSearchFilter } from "./shareSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ShareSingleSelectableFields;
    searchFilter: ShareSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}