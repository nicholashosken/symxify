import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PledgeSingleSelectableFields } from "./pledgeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface PledgeSelectFieldsRequest {
    accountNumber: string;
    pledgeLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PledgeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}