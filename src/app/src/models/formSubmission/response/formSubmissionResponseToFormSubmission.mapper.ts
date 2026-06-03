import { FormSubmission } from '../formSubmission.model';
import {  FormSubmissionResponse } from './formSubmissionResponse.response';

export class FormSubmissionMapper {
    static mapToFormSubmission(formSubmissionResponse: FormSubmissionResponse): FormSubmission {
        return {
            id: formSubmissionResponse.id,
            name: formSubmissionResponse.name,
            age: formSubmissionResponse.age,
            instagram_account: formSubmissionResponse.instagram_account,
            extra_text: formSubmissionResponse.extra_text,
            created_at: formSubmissionResponse.created_at
        }
    }
}