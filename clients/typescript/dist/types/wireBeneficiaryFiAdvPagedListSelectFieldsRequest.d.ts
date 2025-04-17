import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireBeneficiaryFiAdvSingleSelectableFields } from "./wireBeneficiaryFiAdvSingleSelectableFields";
import { VersionType } from "./versionType";
export interface WireBeneficiaryFiAdvPagedListSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireBeneficiaryFiAdvSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
