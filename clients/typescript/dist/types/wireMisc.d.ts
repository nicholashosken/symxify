import { VersionType } from "./versionType";
export interface WireMisc {
    defaultBusinessFunctionCode: string;
    fedFormat: number | null;
    incomingCorpWireGlOffset: string;
    incomingMemberWireGlOffset: string;
    incomingWireDepServiceCode: number | null;
    newWireCutoffTime: number | null;
    outgoingCorpWireGlOffset: string;
    outgoingMemberWireGlOffset: string;
    outgoingWesternUnionGlOffs: string;
    outgoingWireListSrvcCode: number | null;
    outgoingWireWdServiceCode: number | null;
    preAuthWireCutoffTime: number | null;
    senderFi: string;
    senderName: string;
    threshold: number | null;
    westernUnionXferCutoffTime: number | null;
    version1: VersionType;
}
