import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineOutletFields {
    branchNumberValue: boolean;
    branchNumberValueSpecified: boolean;
    branchNumber: boolean | null;
    institutionIdValue: boolean;
    institutionIdValueSpecified: boolean;
    institutionId: boolean | null;
    networkIdValue: boolean;
    networkIdValueSpecified: boolean;
    networkId: boolean | null;
    pseudoTerminalIdValue: boolean;
    pseudoTerminalIdValueSpecified: boolean;
    pseudoTerminalId: boolean | null;
    terminalIdPrefixValue: boolean;
    terminalIdPrefixValueSpecified: boolean;
    terminalIdPrefix: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
