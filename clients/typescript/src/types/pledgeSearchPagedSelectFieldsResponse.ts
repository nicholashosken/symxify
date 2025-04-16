import { Pledge } from "./pledge";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PledgeSearchPagedSelectFieldsResponse {
    pledge: Pledge[];
    pledgeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}