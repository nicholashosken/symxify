import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireDrawdownDebitAcctAdvFields_2 } from "./wireDrawdownDebitAcctAdvFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateWireDrawdownDebitAcctAdvByIdRequest {
    wireSequenceNumberValue: number;
    wireSequenceNumberValueSpecified: boolean;
    wireSequenceNumber: number | null;
    wireDrawdownDebitAcctAdvLocatorValue: number;
    wireDrawdownDebitAcctAdvLocatorValueSpecified: boolean;
    wireDrawdownDebitAcctAdvLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireDrawdownDebitAcctAdvFields: WireDrawdownDebitAcctAdvFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}