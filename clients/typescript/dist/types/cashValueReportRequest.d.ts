import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { BalancingBaseRequest } from "./balancingBaseRequest";
export interface CashValueReportRequest extends BalancingBaseRequest {
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
