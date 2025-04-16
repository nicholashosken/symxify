import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { McwExecutionBaseResponseBody } from "./mcwExecutionBaseResponseBody";

export interface McwExecutionResponseBody extends McwExecutionBaseResponseBody {
    rgLine: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}