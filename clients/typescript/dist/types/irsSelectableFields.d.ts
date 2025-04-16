import { IrsFields } from "./irsFields";
import { IrsDistributionSelectableFields } from "./irsDistributionSelectableFields";
import { IrsNameSelectableFields } from "./irsNameSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface IrsSelectableFields {
    includeAllIrsFieldsValue: boolean;
    includeAllIrsFieldsValueSpecified: boolean;
    includeAllIrsFields: boolean | null;
    irsFields: IrsFields;
    irsDistributionSelectableFields: IrsDistributionSelectableFields;
    irsNameSelectableFields: IrsNameSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
