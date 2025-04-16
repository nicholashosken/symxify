import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SynapsysMrmFields {
    enableSynapsysMrmDeviceValue: boolean;
    enableSynapsysMrmDeviceValueSpecified: boolean;
    enableSynapsysMrmDevice: boolean | null;
    enableTellerTranMrmDisplayValue: boolean;
    enableTellerTranMrmDisplayValueSpecified: boolean;
    enableTellerTranMrmDisplay: boolean | null;
    ipAddressValue: boolean;
    ipAddressValueSpecified: boolean;
    ipAddress: boolean | null;
    portNumberValue: boolean;
    portNumberValueSpecified: boolean;
    portNumber: boolean | null;
    synapsysCuNumberValue: boolean;
    synapsysCuNumberValueSpecified: boolean;
    synapsysCuNumber: boolean | null;
    timeoutValue: boolean;
    timeoutValueSpecified: boolean;
    timeout: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}