import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CpLetter {
    description: string;
    letterCodeValue: number;
    letterCodeValueSpecified: boolean;
    letterCode: number | null;
    nextWorkDaysValue: number;
    nextWorkDaysValueSpecified: boolean;
    nextWorkDays: number | null;
    specfile: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}