import { BitMap } from "./bitMap";
import { VersionType } from "./versionType";

export interface ItcInstallation_2 {
    branchList: BitMap;
    definedCode: number | null;
    itcEnabled: boolean | null;
    itcInstallationProperty: number | null;
    targetPath: string;
    timeOutinMinutes: number | null;
    voidEnabled: boolean | null;
    version1: VersionType;
}