import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface RiskModel {
    model1: string;
    model2: string;
    model3: string;
    model4: string;
    model5: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
