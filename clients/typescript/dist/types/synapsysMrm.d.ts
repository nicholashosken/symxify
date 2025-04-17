import { VersionType } from "./versionType";
export interface SynapsysMrm {
    enableSynapsysMrmDevice: boolean | null;
    enableTellerTranMrmDisplay: boolean | null;
    ipAddress: string;
    portNumber: number | null;
    synapsysCuNumber: string;
    timeout: number | null;
    version1: VersionType;
}
