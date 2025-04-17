import { WireBeneficiaryInfo } from "./wireBeneficiaryInfo";
import { VersionType } from "./versionType";

export interface WireBeneficiaryInfoSearchPagedSelectFieldsResponse {
    wireBeneficiaryInfo: WireBeneficiaryInfo[];
    token: string;
    version1: VersionType;
    messageId: string;
}