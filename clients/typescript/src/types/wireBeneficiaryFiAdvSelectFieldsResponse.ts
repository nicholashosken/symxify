import { WireBeneficiaryFiAdv } from "./wireBeneficiaryFiAdv";
import { VersionType } from "./versionType";

export interface WireBeneficiaryFiAdvSelectFieldsResponse {
    wireBeneficiaryFiAdv: WireBeneficiaryFiAdv;
    version1: VersionType;
    messageId: string;
}