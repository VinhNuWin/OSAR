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
            id: 'Last known address of Assailant',
            label: 'null',
        },
    ];


    return <Questions items={items} />;
}

const itemsList = (items) => {
    return items.label
};

export  {itemsList};
export default QuestionPage;