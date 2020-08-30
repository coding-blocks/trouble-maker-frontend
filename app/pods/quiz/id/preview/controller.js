import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
    queryParams: ['questionId'],
    answers: [],
    api: service(),
    actions: {
        navigate(questionNumber) {
            this.set('question', questionNumber)
        },
        async selectChoice(questionNumber, choiceId) {
            let answers = this.answers
            let idx = answers.findIndex(obj => obj.id == questionNumber)
            if (idx > -1) {
                let ans = answers[idx];
                //If question's entry is present then modify it
                const question = await this.store.findRecord('question', questionNumber)
                if (question.multicorrect) {
                    if (ans.markedChoices.includes(choiceId)) {
                        //If choice is already listed then it must have been removed
                        let index = ans.markedChoices.indexOf(choiceId);
                        if (index > -1) {
                            ans.markedChoices.splice(index, 1);
                        }
                    } else {
                        //Else add the choice to current marked choices
                        ans.markedChoices = [...ans.markedChoices, choiceId]
                    }
                } else {
                    //For non-multicorrect questions, replace the previous choice
                    ans.markedChoices = [choiceId]
                }
            } else {
                //No previous record of this question. Create a new entry and append to answers.
                answers.push({
                    id: questionNumber,
                    markedChoices: [choiceId]
                })
            }
            this.answers = answers
        },
        fetchingResult: false,
        submitQuiz() {
            if (this.fetchingResult)
                return;
            let quiz = this.get('quiz')
            let body = {
                questions: this.answers
            }
            this.set('fetchingResult', true);
            this.api.request('/quizzes/' + quiz.id + '/submit', {
                method: 'POST',
                mode: 'cors',
                data: JSON.stringify(body),
            }).then((response) => {
                console.log(response)
                this.set('results', response)
            }).catch(console.error)
                .finally(() => {
                    this.set('fetchingResult', false)
                })

        }
    },
})
