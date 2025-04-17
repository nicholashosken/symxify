import { WireBeneficiaryInfo } from "./wireBeneficiaryInfo";
import { VersionType } from "./versionType";

export interface WireBeneficiaryInfoPagedListSelectFieldsResponse {
    wireBeneficiaryInfo: WireBeneficiaryInfo[];
    token: string;
    version1: VersionType;
    messageId: string;
}