import { WireBeneficiaryAdv } from "./wireBeneficiaryAdv";
import { VersionType } from "./versionType";

export interface WireBeneficiaryAdvSearchPagedSelectFieldsResponse {
    wireBeneficiaryAdv: WireBeneficiaryAdv[];
    token: string;
    version1: VersionType;
    messageId: string;
}