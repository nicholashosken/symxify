import { IrsDistributionFields } from "./irsDistributionFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface IrsDistributionSingleSelectableFields {
    includeAllIrsDistributionFieldsValue: boolean;
    includeAllIrsDistributionFieldsValueSpecified: boolean;
    includeAllIrsDistributionFields: boolean | null;
    irsDistributionFields: IrsDistributionFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}