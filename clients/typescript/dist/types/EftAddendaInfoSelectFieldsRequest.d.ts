import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EftAddendaInfoSingleSelectableFields } from "./eftAddendaInfoSingleSelectableFields";
import { VersionType } from "./versionType";
export interface EftAddendaInfoSelectFieldsRequest {
    accountNumber: string;
    eftLocator: number | null;
    eftAddendaInfoLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: EftAddendaInfoSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
