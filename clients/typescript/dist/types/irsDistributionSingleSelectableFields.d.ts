import { IrsDistributionFields } from "./irsDistributionFields";
import { VersionType } from "./versionType";
export interface IrsDistributionSingleSelectableFields {
    includeAllIrsDistributionFields: boolean | null;
    irsDistributionFields: IrsDistributionFields;
    version1: VersionType;
}
