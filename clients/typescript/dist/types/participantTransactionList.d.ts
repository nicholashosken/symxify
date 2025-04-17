import { ParticipantTransaction } from "./participantTransaction";
export interface ParticipantTransactionList {
    hasReachedMaximumListSize: boolean | null;
    participantTransaction: ParticipantTransaction[];
}
