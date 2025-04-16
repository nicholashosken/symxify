import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { EftSingleSelectableFields } from "./eftSingleSelectableFields";
import { EftSearchFilter } from "./eftSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface EftSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: EftSingleSelectableFields;
    searchFilter: EftSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}