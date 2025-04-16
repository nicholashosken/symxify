import { ExecutionHeader } from "./executionHeader";
import { ExecutionResponseBody } from "./executionResponseBody";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PowerOnExecutionResponse {
    header: ExecutionHeader;
    body: ExecutionResponseBody;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}