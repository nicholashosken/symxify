import { WireBeneficiaryFiInfo } from "./wireBeneficiaryFiInfo";
import { VersionType } from "./versionType";
export interface WireBeneficiaryFiInfoPagedListSelectFieldsResponse {
    wireBeneficiaryFiInfo: WireBeneficiaryFiInfo[];
    token: string;
    version1: VersionType;
    messageId: string;
}
