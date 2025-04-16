import { EscrowType } from "./escrowType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface EscrowTypePagedListSelectFieldsResponse {
    escrowType: EscrowType[];
    escrowTypeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}