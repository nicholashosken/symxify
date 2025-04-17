import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireBeneficiaryAdvSingleSelectableFields } from "./wireBeneficiaryAdvSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireBeneficiaryAdvPagedListSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireBeneficiaryAdvSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}