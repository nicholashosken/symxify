import { CardWizFields } from "./cardWizFields";
import { VersionType } from "./versionType";

export interface CardWizSelectableFields {
    includeAllCardWizFields: boolean | null;
    cardWizFields: CardWizFields;
    version1: VersionType;
}