import { IrsFields } from "./irsFields";
import { IrsDistributionSelectableFields } from "./irsDistributionSelectableFields";
import { IrsNameSelectableFields } from "./irsNameSelectableFields";
import { VersionType } from "./versionType";
export interface IrsSelectableFields {
    includeAllIrsFields: boolean | null;
    irsFields: IrsFields;
    irsDistributionSelectableFields: IrsDistributionSelectableFields;
    irsNameSelectableFields: IrsNameSelectableFields;
    version1: VersionType;
}
