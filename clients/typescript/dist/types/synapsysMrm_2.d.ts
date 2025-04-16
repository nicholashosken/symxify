import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SynapsysMrm_2 {
    enableSynapsysMrmDeviceValue: boolean;
    enableSynapsysMrmDeviceValueSpecified: boolean;
    enableSynapsysMrmDevice: boolean | null;
    enableTellerTranMrmDisplayValue: boolean;
    enableTellerTranMrmDisplayValueSpecified: boolean;
    enableTellerTranMrmDisplay: boolean | null;
    ipAddress: string;
    portNumberValue: number;
    portNumberValueSpecified: boolean;
    portNumber: number | null;
    synapsysCuNumber: string;
    timeoutValue: number;
    timeoutValueSpecified: boolean;
    timeout: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
