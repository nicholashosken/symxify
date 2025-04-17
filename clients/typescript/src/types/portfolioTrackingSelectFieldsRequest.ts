import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PortfolioTrackingSingleSelectableFields } from "./portfolioTrackingSingleSelectableFields";
import { VersionType } from "./versionType";

export interface PortfolioTrackingSelectFieldsRequest {
    accountNumber: string;
    portfolioId: string;
    portfolioTrackingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PortfolioTrackingSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}