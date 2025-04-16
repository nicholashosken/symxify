import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PortfolioHoldSingleSelectableFields } from "./portfolioHoldSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PortfolioHoldSelectFieldsRequest {
    accountNumber: string;
    portfolioId: string;
    portfolioHoldLocatorValue: number;
    portfolioHoldLocatorValueSpecified: boolean;
    portfolioHoldLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PortfolioHoldSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}