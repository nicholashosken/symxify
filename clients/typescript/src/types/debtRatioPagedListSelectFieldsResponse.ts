import { DebtRatio } from "./debtRatio";
import { VersionType } from "./versionType";

export interface DebtRatioPagedListSelectFieldsResponse {
    debtRatio: DebtRatio[];
    token: string;
    version1: VersionType;
    messageId: string;
}