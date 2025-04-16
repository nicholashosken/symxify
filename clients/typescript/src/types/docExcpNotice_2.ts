import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DocExcpNotice_2 {
    daysAfterPreviousNoticeValue: number;
    daysAfterPreviousNoticeValueSpecified: boolean;
    daysAfterPreviousNotice: number | null;
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    noticeNumberValue: number;
    noticeNumberValueSpecified: boolean;
    noticeNumber: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}