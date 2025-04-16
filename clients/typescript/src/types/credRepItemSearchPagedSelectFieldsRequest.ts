import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CredRepItemSingleSelectableFields } from "./credRepItemSingleSelectableFields";
import { CredRepItemSearchFilter } from "./credRepItemSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CredRepItemSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credRepLocatorValue: number;
    credRepLocatorValueSpecified: boolean;
    credRepLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CredRepItemSingleSelectableFields;
    searchFilter: CredRepItemSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}