import { IrsDistributionFields } from "./irsDistributionFields";
import { VersionType } from "./versionType";
export interface IrsDistributionSelectableFields {
    includeAllIrsDistributionFields: boolean | null;
    irsDistributionFields: IrsDistributionFields;
    version1: VersionType;
}
