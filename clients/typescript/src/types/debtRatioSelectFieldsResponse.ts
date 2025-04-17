import { DebtRatio } from "./debtRatio";
import { VersionType } from "./versionType";

export interface DebtRatioSelectFieldsResponse {
    debtRatio: DebtRatio;
    version1: VersionType;
    messageId: string;
}