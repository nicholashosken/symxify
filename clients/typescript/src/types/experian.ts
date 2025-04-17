import { RiskModel } from "./riskModel";
import { VersionType } from "./versionType";

export interface Experian {
    operatorCode: string;
    riskModel: RiskModel;
    version1: VersionType;
}