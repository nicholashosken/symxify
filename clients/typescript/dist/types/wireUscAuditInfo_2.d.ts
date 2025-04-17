import { WireUscAuditInfoText_2 } from "./wireUscAuditInfoText_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireUscAuditInfo_2 {
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    text: WireUscAuditInfoText_2[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
