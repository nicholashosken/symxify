import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireUscAuditInfoSingleSelectableFields } from "./wireUscAuditInfoSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireUscAuditInfoSelectFieldsRequest {
    wireSequenceNumber: number | null;
    wireUscAuditInfoLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireUscAuditInfoSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}