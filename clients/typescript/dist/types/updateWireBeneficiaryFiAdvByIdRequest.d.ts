import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireBeneficiaryFiAdvFields_2 } from "./wireBeneficiaryFiAdvFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateWireBeneficiaryFiAdvByIdRequest {
    wireSequenceNumberValue: number;
    wireSequenceNumberValueSpecified: boolean;
    wireSequenceNumber: number | null;
    wireBeneficiaryFiAdvLocatorValue: number;
    wireBeneficiaryFiAdvLocatorValueSpecified: boolean;
    wireBeneficiaryFiAdvLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireBeneficiaryFiAdvFields: WireBeneficiaryFiAdvFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
