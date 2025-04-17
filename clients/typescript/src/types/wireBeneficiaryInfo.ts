import { WireBeneficiaryInfoText } from "./wireBeneficiaryInfoText";
import { VersionType } from "./versionType";

export interface WireBeneficiaryInfo {
    locator: number | null;
    text: WireBeneficiaryInfoText[];
    version1: VersionType;
}