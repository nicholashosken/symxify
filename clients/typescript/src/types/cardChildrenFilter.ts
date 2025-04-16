import { CardAccessFilter } from "./cardAccessFilter";
import { CardNameFilter } from "./cardNameFilter";
import { CardNoteFilter } from "./cardNoteFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CardChildrenFilter {
    cardAccessFilter: CardAccessFilter;
    cardNameFilter: CardNameFilter;
    cardNoteFilter: CardNoteFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}