import {helper} from '@ember/component/helper';

export function markOption([questionId, choiceId, answers]) {
    let index = answers.findIndex(obj => obj.id == questionId)
    if (index > -1) {
        if (answers[index].markedChoices.includes(choiceId)) {
            return true;
        }
    }
    return false
}

export default helper(markOption);
