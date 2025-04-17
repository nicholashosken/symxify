import { WireBeneficiaryInfo } from "./wireBeneficiaryInfo";
import { VersionType } from "./versionType";
export interface WireBeneficiaryInfoSelectFieldsResponse {
    wireBeneficiaryInfo: WireBeneficiaryInfo;
    version1: VersionType;
    messageId: string;
}
