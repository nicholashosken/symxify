import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CardAccessSingleSelectableFields } from "./cardAccessSingleSelectableFields";
import { CardAccessSearchFilter } from "./cardAccessSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CardAccessSearchPagedSelectFieldsRequest {
    accountNumber: string;
    cardLocatorValue: number;
    cardLocatorValueSpecified: boolean;
    cardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CardAccessSingleSelectableFields;
    searchFilter: CardAccessSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}