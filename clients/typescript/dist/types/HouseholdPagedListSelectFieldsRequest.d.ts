import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { HouseholdSingleSelectableFields } from "./householdSingleSelectableFields";
import { VersionType } from "./versionType";
export interface HouseholdPagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: HouseholdSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
