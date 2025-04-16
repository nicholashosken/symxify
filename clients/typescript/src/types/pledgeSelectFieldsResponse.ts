import { Pledge } from "./pledge";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PledgeSelectFieldsResponse {
    pledge: Pledge;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}