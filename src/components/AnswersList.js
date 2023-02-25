import { useSelector } from 'react-redux';

function AnswersList() {
    const answers = useSelector((state) => {
        return state.answers.data;
    });
    console.log(answers)

    const renderedData = answers.map((answer) => {
        return (
            <div key={answer.id} classNamne="panel">
                <p>
                    {answer.data}
                </p>
            </div>
        )
    })
}

export default AnswersList;