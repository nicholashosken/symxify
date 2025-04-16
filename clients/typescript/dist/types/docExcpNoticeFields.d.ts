import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DocExcpNoticeFields {
    daysAfterPreviousNoticeValue: boolean;
    daysAfterPreviousNoticeValueSpecified: boolean;
    daysAfterPreviousNotice: boolean | null;
    line1Value: boolean;
    line1ValueSpecified: boolean;
    line1: boolean | null;
    line2Value: boolean;
    line2ValueSpecified: boolean;
    line2: boolean | null;
    line3Value: boolean;
    line3ValueSpecified: boolean;
    line3: boolean | null;
    line4Value: boolean;
    line4ValueSpecified: boolean;
    line4: boolean | null;
    noticeNumberValue: boolean;
    noticeNumberValueSpecified: boolean;
    noticeNumber: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
