import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireDrawdownDebitAcctAdvSingleSelectableFields } from "./wireDrawdownDebitAcctAdvSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireDrawdownDebitAcctAdvSelectFieldsRequest {
    wireSequenceNumberValue: number;
    wireSequenceNumberValueSpecified: boolean;
    wireSequenceNumber: number | null;
    wireDrawdownDebitAcctAdvLocatorValue: number;
    wireDrawdownDebitAcctAdvLocatorValueSpecified: boolean;
    wireDrawdownDebitAcctAdvLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireDrawdownDebitAcctAdvSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
