import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CpLetterFields {
    descriptionValue: boolean;
    descriptionValueSpecified: boolean;
    description: boolean | null;
    letterCodeValue: boolean;
    letterCodeValueSpecified: boolean;
    letterCode: boolean | null;
    nextWorkDaysValue: boolean;
    nextWorkDaysValueSpecified: boolean;
    nextWorkDays: boolean | null;
    specfileValue: boolean;
    specfileValueSpecified: boolean;
    specfile: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
