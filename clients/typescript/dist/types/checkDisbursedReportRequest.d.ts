import { VersionType } from "./versionType";
import { BalancingBaseRequest } from "./balancingBaseRequest";
export interface CheckDisbursedReportRequest extends BalancingBaseRequest {
    version1: VersionType;
}
