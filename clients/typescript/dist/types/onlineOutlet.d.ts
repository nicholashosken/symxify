import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineOutlet {
    branchNumberValue: number;
    branchNumberValueSpecified: boolean;
    branchNumber: number | null;
    institutionId: string;
    networkId: string;
    pseudoTerminalId: string;
    terminalIdPrefix: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
