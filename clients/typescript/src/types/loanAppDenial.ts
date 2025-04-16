import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppDenial {
    denialNoticeValue: number;
    denialNoticeValueSpecified: boolean;
    denialNotice: number | null;
    denialNoticeDescription: string;
    denialNoticeSpecfile: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}