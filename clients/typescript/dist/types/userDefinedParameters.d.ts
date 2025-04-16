import { UserChr } from "./userChr";
import { UserNum } from "./userNum";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UserDefinedParameters {
    rgUserChr: UserChr[];
    rgUserChrSpecified: boolean;
    rgUserNum: UserNum[];
    rgUserNumSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
