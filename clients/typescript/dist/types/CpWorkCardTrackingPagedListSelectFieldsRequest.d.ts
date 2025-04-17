import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CpWorkCardTrackingSingleSelectableFields } from "./cpWorkCardTrackingSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CpWorkCardTrackingPagedListSelectFieldsRequest {
    accountNumber: string;
    cpWorkCardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CpWorkCardTrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
