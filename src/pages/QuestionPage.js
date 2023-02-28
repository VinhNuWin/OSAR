import Questions from '../components/Questions';
import AnswerForm from '../components/AnswerForm';
import AnswersList from '../components/AnswersList';


const items = 
    [
        'Assailants name',
    'Aliases(Instagram, Tinder, etc.)',
    'Race/Ethnicity',
    'Sex',
    'Address',
    'Work',
    'Cell',
    'Email',
    'Assailants Defining Characteristics (i.e. tattoos, scrars, physical disabilities, etc.',
        'Location of Assault',
        'Date and Time of Incident',
        'Was Alcohol Involved',
        'Were Drugs Involved',
        'Was Survivor Asleep at time of Incident',
        'Were there verbal threats to the survivor',
        'Was resistance offered by survivor',
        'Details of the assault',
        'Areas of sexual contact',
        'Did the survivor receive a Sexual Assault Evidence Kit(i.e Rape Kit)',
        'Use of weapons',
        'Use of Restraints',
        'Name of Survivor',
        'Email'
    ];


function QuestionPage() {

    
    return (
        <div>
    <Questions />
    <AnswerForm />
    <AnswersList />
    </div>
 
    )
};


export  { items };
export default QuestionPage;



//     const suspect = [
//     'Assailants name',
//     'Aliases(Instagram, Tinder, etc.)',
//     // 'Height',
//     // 'Weight',
//     'Race/Ethnicity',
//     'Sex',
//     'Address',
//     'Work',
//     'Cell',
//     'Email',
//     'Assailants Defining Characteristics (i.e. tattoos, scrars, physical disabilities, etc.',
// ]

// const incident = [
//     'Location of Assault',
//     'Date and Time of Incident',
//     'Was Alcohol Involved',
//     'Were Drugs Involved',
//     'Was Survivor Asleep at time of Incident',
//     'Were there verbal threats to the survivor',
//     'Was resistance offered by survivor',
//     'Details of the assault',
//     'Areas of sexual contact',
//     'Did the survivor receive a Sexual Assault Evidence Kit(i.e Rape Kit)',
//     'Use of weapons',
//     'Use of Restraints',
// ]

// const survivor = [
//     'Name of Survivor',
//     'Email'
// ]