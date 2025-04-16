import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppDenialFields {
    denialNoticeValue: boolean;
    denialNoticeValueSpecified: boolean;
    denialNotice: boolean | null;
    denialNoticeDescriptionValue: boolean;
    denialNoticeDescriptionValueSpecified: boolean;
    denialNoticeDescription: boolean | null;
    denialNoticeSpecfileValue: boolean;
    denialNoticeSpecfileValueSpecified: boolean;
    denialNoticeSpecfile: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
