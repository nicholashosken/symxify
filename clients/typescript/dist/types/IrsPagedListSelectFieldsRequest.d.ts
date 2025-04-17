import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { IrsSingleSelectableFields } from "./irsSingleSelectableFields";
import { VersionType } from "./versionType";
export interface IrsPagedListSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: IrsSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
