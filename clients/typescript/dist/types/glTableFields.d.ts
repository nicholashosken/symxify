import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlTableFields {
    amount: number[];
    amountSpecified: boolean;
    descriptionValue: boolean;
    descriptionValueSpecified: boolean;
    description: boolean | null;
    glAccount: number[];
    glAccountSpecified: boolean;
    glTableTypeValue: boolean;
    glTableTypeValueSpecified: boolean;
    glTableType: boolean | null;
    negative: number[];
    negativeSpecified: boolean;
    percent: number[];
    percentSpecified: boolean;
    usageCodeValue: boolean;
    usageCodeValueSpecified: boolean;
    usageCode: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
