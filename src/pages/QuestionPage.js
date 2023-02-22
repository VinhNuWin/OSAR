import Questions from '../components/Questions';

function QuestionPage() {
    const items = [
        {
            id: 'q1',
            label: 'When did the event occur?',
        },
        {
            id: 'q2',
            label: 'Name of the Assailant?',
        },
        {
            id: 'q3',
            label: 'null',
        },
    ];

    return <Questions items={items} />;
}

export default QuestionPage;