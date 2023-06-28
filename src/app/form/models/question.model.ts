import { QuestionType } from './question-type.model';
import { BaseModal } from "src/app/shared/models/base-model.model";


export class Question extends BaseModal {
    title: string;
    questionType: QuestionType;
}
