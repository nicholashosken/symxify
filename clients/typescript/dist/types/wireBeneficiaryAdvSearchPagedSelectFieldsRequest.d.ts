import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireBeneficiaryAdvSingleSelectableFields } from "./wireBeneficiaryAdvSingleSelectableFields";
import { WireBeneficiaryAdvSearchFilter } from "./wireBeneficiaryAdvSearchFilter";
import { VersionType } from "./versionType";
export interface WireBeneficiaryAdvSearchPagedSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireBeneficiaryAdvSingleSelectableFields;
    searchFilter: WireBeneficiaryAdvSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
