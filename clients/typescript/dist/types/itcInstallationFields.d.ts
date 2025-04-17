import { VersionType } from "./versionType";
export interface ItcInstallationFields {
    branchList: boolean | null;
    definedCode: boolean | null;
    itcEnabled: boolean | null;
    itcInstallation: boolean | null;
    targetPath: boolean | null;
    timeOutinMinutes: boolean | null;
    voidEnabled: boolean | null;
    version1: VersionType;
}
