import { VersionType } from "./versionType";

export interface WireCorpVerFields {
    corpEnteredMbrVerifyMins: boolean | null;
    newWireMinVerifyAmt: boolean | null;
    preAuthMinVerifyAmt: boolean | null;
    verifyPreAuthTemplateEdits: boolean | null;
    westernUnionMinVerifyAmt: boolean | null;
    version1: VersionType;
}