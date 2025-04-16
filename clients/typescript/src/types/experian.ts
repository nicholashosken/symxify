import { RiskModel } from "./riskModel";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface Experian {
    operatorCode: string;
    riskModel: RiskModel;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}