import { WireBeneficiaryFiAdv } from "./wireBeneficiaryFiAdv";
import { VersionType } from "./versionType";
export interface WireBeneficiaryFiAdvSearchPagedSelectFieldsResponse {
    wireBeneficiaryFiAdv: WireBeneficiaryFiAdv[];
    token: string;
    version1: VersionType;
    messageId: string;
}
