import { VersionType } from "./versionType";
export interface OnlineOutlet {
    branchNumber: number | null;
    institutionId: string;
    networkId: string;
    pseudoTerminalId: string;
    terminalIdPrefix: string;
    version1: VersionType;
}
