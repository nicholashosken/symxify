import { WireBeneficiaryAdvText } from "./wireBeneficiaryAdvText";
import { VersionType } from "./versionType";
export interface WireBeneficiaryAdv {
    locator: number | null;
    text: WireBeneficiaryAdvText[];
    version1: VersionType;
}
