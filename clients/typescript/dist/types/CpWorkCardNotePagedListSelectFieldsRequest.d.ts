import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CpWorkCardNoteSingleSelectableFields } from "./cpWorkCardNoteSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CpWorkCardNotePagedListSelectFieldsRequest {
    accountNumber: string;
    cpWorkCardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CpWorkCardNoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
