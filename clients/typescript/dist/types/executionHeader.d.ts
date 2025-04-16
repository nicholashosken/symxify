import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExecutionHeader {
    messageId: string;
    rgState: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
