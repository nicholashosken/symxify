import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CpWorkCardTrackingSingleSelectableFields } from "./cpWorkCardTrackingSingleSelectableFields";
import { CpWorkCardTrackingSearchFilter } from "./cpWorkCardTrackingSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CpWorkCardTrackingSearchPagedSelectFieldsRequest {
    accountNumber: string;
    cpWorkCardLocatorValue: number;
    cpWorkCardLocatorValueSpecified: boolean;
    cpWorkCardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CpWorkCardTrackingSingleSelectableFields;
    searchFilter: CpWorkCardTrackingSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
