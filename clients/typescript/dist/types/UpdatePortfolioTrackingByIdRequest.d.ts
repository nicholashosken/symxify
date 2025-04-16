import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PortfolioTrackingFields_2 } from "./portfolioTrackingFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdatePortfolioTrackingByIdRequest {
    accountNumber: string;
    portfolioId: string;
    portfolioTrackingLocatorValue: number;
    portfolioTrackingLocatorValueSpecified: boolean;
    portfolioTrackingLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    portfolioTrackingFields: PortfolioTrackingFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
