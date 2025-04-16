import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PreferenceAccessSingleSelectableFields } from "./preferenceAccessSingleSelectableFields";
import { PreferenceAccessSearchFilter } from "./preferenceAccessSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PreferenceAccessSearchPagedSelectFieldsRequest {
    accountNumber: string;
    preferenceLocatorValue: number;
    preferenceLocatorValueSpecified: boolean;
    preferenceLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PreferenceAccessSingleSelectableFields;
    searchFilter: PreferenceAccessSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
