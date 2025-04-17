import { WireBeneficiaryFiInfoText } from "./wireBeneficiaryFiInfoText";
import { VersionType } from "./versionType";

export interface WireBeneficiaryFiInfo {
    locator: number | null;
    text: WireBeneficiaryFiInfoText[];
    version1: VersionType;
}