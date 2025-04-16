import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { ExecutionBaseResponseBody } from "./executionBaseResponseBody";

export interface ExecutionResponseBody extends ExecutionBaseResponseBody {
    rgLines: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}