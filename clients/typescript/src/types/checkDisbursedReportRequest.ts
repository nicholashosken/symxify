import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { BalancingBaseRequest } from "./balancingBaseRequest";

export interface CheckDisbursedReportRequest extends BalancingBaseRequest {
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}