import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireCorpVerFields {
    corpEnteredMbrVerifyMinsValue: boolean;
    corpEnteredMbrVerifyMinsValueSpecified: boolean;
    corpEnteredMbrVerifyMins: boolean | null;
    newWireMinVerifyAmtValue: boolean;
    newWireMinVerifyAmtValueSpecified: boolean;
    newWireMinVerifyAmt: boolean | null;
    preAuthMinVerifyAmtValue: boolean;
    preAuthMinVerifyAmtValueSpecified: boolean;
    preAuthMinVerifyAmt: boolean | null;
    verifyPreAuthTemplateEditsValue: boolean;
    verifyPreAuthTemplateEditsValueSpecified: boolean;
    verifyPreAuthTemplateEdits: boolean | null;
    westernUnionMinVerifyAmtValue: boolean;
    westernUnionMinVerifyAmtValueSpecified: boolean;
    westernUnionMinVerifyAmt: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
