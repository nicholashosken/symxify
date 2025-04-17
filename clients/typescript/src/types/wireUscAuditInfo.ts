import { WireUscAuditInfoText } from "./wireUscAuditInfoText";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireUscAuditInfo {
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    text: WireUscAuditInfoText[];
    textSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}