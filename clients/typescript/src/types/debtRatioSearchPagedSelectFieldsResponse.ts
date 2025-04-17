import { DebtRatio } from "./debtRatio";
import { VersionType } from "./versionType";

export interface DebtRatioSearchPagedSelectFieldsResponse {
    debtRatio: DebtRatio[];
    token: string;
    version1: VersionType;
    messageId: string;
}