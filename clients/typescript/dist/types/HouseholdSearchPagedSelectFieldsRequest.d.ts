import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { HouseholdSingleSelectableFields } from "./householdSingleSelectableFields";
import { HouseholdSearchFilter } from "./householdSearchFilter";
import { VersionType } from "./versionType";
export interface HouseholdSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: HouseholdSingleSelectableFields;
    searchFilter: HouseholdSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
