import { ExecutionHeader } from "./executionHeader";
import { ExecutionReturnArrayResponseBody } from "./executionReturnArrayResponseBody";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PowerOnExecutionReturnArrayResponse {
    header: ExecutionHeader;
    body: ExecutionReturnArrayResponseBody;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}