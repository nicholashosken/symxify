import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireIntermedFiAdvSingleSelectableFields } from "./wireIntermedFiAdvSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireIntermedFiAdvSelectFieldsRequest {
    wireSequenceNumber: number | null;
    wireIntermedFiAdvLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireIntermedFiAdvSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}