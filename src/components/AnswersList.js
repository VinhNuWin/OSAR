import { useSelector } from 'react-redux';

function AnswersList() {
    const dataList = useSelector((state) => {
        return state.index.data;
    });
    console.log(dataList);

    const handleAnswerDelete = () => {

    }

    const renderedData = dataList.map((answer) => {
        return (
            <div key={answer.id} className="panel">
                <p>
                    AnswersList
                    {answer.fName} {answer.lName}
                </p>
                <button
                    className="button is-danger"
                    onClick={() => handleAnswerDelete()}>
                        delete
                    </button>
            </div>
        )
    });
    return <div className="answer-list">
        {renderedData}
        <hr />
    </div>
}

export default AnswersList;