import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireInCmtCodeFields {
    commentCodeValue: boolean;
    commentCodeValueSpecified: boolean;
    commentCode: boolean | null;
    matchBusFunctionCodeValue: boolean;
    matchBusFunctionCodeValueSpecified: boolean;
    matchBusFunctionCode: boolean | null;
    matchNotifyMethodValue: boolean;
    matchNotifyMethodValueSpecified: boolean;
    matchNotifyMethod: boolean | null;
    matchTypeCodeValue: boolean;
    matchTypeCodeValueSpecified: boolean;
    matchTypeCode: boolean | null;
    selectionValue: boolean;
    selectionValueSpecified: boolean;
    selection: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}