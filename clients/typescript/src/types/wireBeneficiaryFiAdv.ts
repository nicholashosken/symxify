import { WireBeneficiaryFiAdvText } from "./wireBeneficiaryFiAdvText";
import { VersionType } from "./versionType";

export interface WireBeneficiaryFiAdv {
    locator: number | null;
    text: WireBeneficiaryFiAdvText[];
    version1: VersionType;
}