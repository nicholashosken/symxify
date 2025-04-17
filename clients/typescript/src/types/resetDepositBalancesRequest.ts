import { VersionType } from "./versionType";
import { BalancingBaseRequest } from "./balancingBaseRequest";

export interface ResetDepositBalancesRequest extends BalancingBaseRequest {
    balanceReportFlag: boolean | null;
    version1: VersionType;
}