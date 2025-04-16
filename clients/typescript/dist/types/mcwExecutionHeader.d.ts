import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface McwExecutionHeader {
    messageId: string;
    mcwState: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
