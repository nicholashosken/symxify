import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PortfolioNoteSingleSelectableFields } from "./portfolioNoteSingleSelectableFields";
import { VersionType } from "./versionType";
export interface PortfolioNoteSelectFieldsRequest {
    accountNumber: string;
    portfolioId: string;
    portfolioNoteLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PortfolioNoteSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
