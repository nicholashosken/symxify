import { SynapsysMrm } from "./synapsysMrm";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SynapsysMrmSelectFieldsResponse {
    synapsysMrm: SynapsysMrm;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
