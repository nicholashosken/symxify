import { VersionType } from "./versionType";
export interface WireCorpVer {
    corpEnteredMbrVerifyMins: number | null;
    newWireMinVerifyAmt: number | null;
    preAuthMinVerifyAmt: number | null;
    verifyPreAuthTemplateEdits: number | null;
    westernUnionMinVerifyAmt: number | null;
    version1: VersionType;
}
