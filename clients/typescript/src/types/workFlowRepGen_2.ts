import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WorkFlowRepGen_2 {
    specfileValue: number;
    specfileValueSpecified: boolean;
    specfile: number | null;
    specfileDescription: string;
    specfileName: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}