import { QuestionType } from './question-type.model';
import { BaseModal } from "src/app/shared/models/base-model.model";

export class Answer {
    status: boolean;
    text: string;
}
export class Question extends BaseModal {
    title: string;
    questionType: string;
    text?: string;
    answerArray?: Answer[]
    isrequied?: boolean;
    isOwnAnswer?: Boolean;
}


