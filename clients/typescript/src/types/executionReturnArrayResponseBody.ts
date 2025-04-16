import { RgLine } from "./rgLine";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { ExecutionBaseResponseBody } from "./executionBaseResponseBody";

export interface ExecutionReturnArrayResponseBody extends ExecutionBaseResponseBody {
    rgLine: RgLine[];
    rgLineSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}