import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireOfacDetailsSingleSelectableFields } from "./wireOfacDetailsSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireOfacDetailsSelectFieldsRequest {
    wireSequenceNumber: number | null;
    wireOfacDetailsLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireOfacDetailsSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}