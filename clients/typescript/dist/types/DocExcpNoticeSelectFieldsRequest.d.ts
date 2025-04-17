import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DocExcpNoticeSingleSelectableFields } from "./docExcpNoticeSingleSelectableFields";
import { VersionType } from "./versionType";
export interface DocExcpNoticeSelectFieldsRequest {
    docExcpNoticeNoticeNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: DocExcpNoticeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
