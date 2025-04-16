import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface TellerTranValidateFields {
    after: number[];
    afterSpecified: boolean;
    at: number[];
    atSpecified: boolean;
    before: number[];
    beforeSpecified: boolean;
    helpCode: number[];
    helpCodeSpecified: boolean;
    tableDepthValue: boolean;
    tableDepthValueSpecified: boolean;
    tableDepth: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}