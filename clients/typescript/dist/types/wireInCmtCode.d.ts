import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireInCmtCode {
    commentCodeValue: number;
    commentCodeValueSpecified: boolean;
    commentCode: number | null;
    matchBusFunctionCode: string;
    matchNotifyMethodValue: number;
    matchNotifyMethodValueSpecified: boolean;
    matchNotifyMethod: number | null;
    matchTypeCode: string;
    selectionValue: number;
    selectionValueSpecified: boolean;
    selection: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
