import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CpWorkCardNoteSingleSelectableFields } from "./cpWorkCardNoteSingleSelectableFields";
import { CpWorkCardNoteSearchFilter } from "./cpWorkCardNoteSearchFilter";
import { VersionType } from "./versionType";
export interface CpWorkCardNoteSearchPagedSelectFieldsRequest {
    accountNumber: string;
    cpWorkCardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CpWorkCardNoteSingleSelectableFields;
    searchFilter: CpWorkCardNoteSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
