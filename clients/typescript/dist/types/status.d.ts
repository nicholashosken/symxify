import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface Status {
    statusCodeValue: number;
    statusCodeValueSpecified: boolean;
    statusCode: number | null;
    message: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
