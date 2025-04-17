import { ParticipantTransaction } from "./participantTransaction";
export interface ParticipantTransactionList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    participantTransaction: ParticipantTransaction[];
    participantTransactionSpecified: boolean;
}
