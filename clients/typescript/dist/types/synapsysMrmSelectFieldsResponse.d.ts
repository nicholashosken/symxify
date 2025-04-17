import { SynapsysMrm } from "./synapsysMrm";
import { VersionType } from "./versionType";
export interface SynapsysMrmSelectFieldsResponse {
    synapsysMrm: SynapsysMrm;
    version1: VersionType;
    messageId: string;
}
