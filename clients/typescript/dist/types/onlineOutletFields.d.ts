import { VersionType } from "./versionType";
export interface OnlineOutletFields {
    branchNumber: boolean | null;
    institutionId: boolean | null;
    networkId: boolean | null;
    pseudoTerminalId: boolean | null;
    terminalIdPrefix: boolean | null;
    version1: VersionType;
}
