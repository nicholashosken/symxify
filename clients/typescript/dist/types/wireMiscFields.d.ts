import { VersionType } from "./versionType";
export interface WireMiscFields {
    defaultBusinessFunctionCode: boolean | null;
    fedFormat: boolean | null;
    incomingCorpWireGlOffset: boolean | null;
    incomingMemberWireGlOffset: boolean | null;
    incomingWireDepServiceCode: boolean | null;
    newWireCutoffTime: boolean | null;
    outgoingCorpWireGlOffset: boolean | null;
    outgoingMemberWireGlOffset: boolean | null;
    outgoingWesternUnionGlOffs: boolean | null;
    outgoingWireListSrvcCode: boolean | null;
    outgoingWireWdServiceCode: boolean | null;
    preAuthWireCutoffTime: boolean | null;
    senderFi: boolean | null;
    senderName: boolean | null;
    threshold: boolean | null;
    westernUnionXferCutoffTime: boolean | null;
    version1: VersionType;
}
