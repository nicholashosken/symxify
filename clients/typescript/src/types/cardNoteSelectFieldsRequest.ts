import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CardNoteSingleSelectableFields } from "./cardNoteSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CardNoteSelectFieldsRequest {
    accountNumber: string;
    cardLocator: number | null;
    cardNoteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CardNoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}