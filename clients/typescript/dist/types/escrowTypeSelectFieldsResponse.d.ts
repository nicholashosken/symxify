import { EscrowType } from "./escrowType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface EscrowTypeSelectFieldsResponse {
    escrowType: EscrowType;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
