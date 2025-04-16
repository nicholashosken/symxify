import { IntIndex } from "./intIndex";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface IntIndexSearchPagedSelectFieldsResponse {
    intIndex: IntIndex[];
    intIndexSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
