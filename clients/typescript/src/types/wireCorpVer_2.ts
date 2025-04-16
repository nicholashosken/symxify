import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireCorpVer_2 {
    corpEnteredMbrVerifyMinsValue: number;
    corpEnteredMbrVerifyMinsValueSpecified: boolean;
    corpEnteredMbrVerifyMins: number | null;
    newWireMinVerifyAmtValue: number;
    newWireMinVerifyAmtValueSpecified: boolean;
    newWireMinVerifyAmt: number | null;
    preAuthMinVerifyAmtValue: number;
    preAuthMinVerifyAmtValueSpecified: boolean;
    preAuthMinVerifyAmt: number | null;
    verifyPreAuthTemplateEditsValue: number;
    verifyPreAuthTemplateEditsValueSpecified: boolean;
    verifyPreAuthTemplateEdits: number | null;
    westernUnionMinVerifyAmtValue: number;
    westernUnionMinVerifyAmtValueSpecified: boolean;
    westernUnionMinVerifyAmt: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}