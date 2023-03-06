import Questions from '../components/Questions';
import AnswerCard from '../components/AnswerCard';

const items = 
    [
    'Assailants Name',
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


    const socialMedia = [
        { label: 'Instagram', value: 'Instagram' },
        { label: 'Facebook', value: 'Facebook' },
        { label: 'Tinder', value: 'Tinder' },
        { label: 'Email', value: 'Email' },
      ];
        
      const raceEthnicity = [
        {label: 'White', value: 'White'},
        {label: 'Black or African American', value: 'Black or African American'},
        {label: 'American Indian or Alaskan Native', value: 'American Indian or Alaskan Native'},
        {label: 'Asian', value: 'Asian'},
        {label: 'Native Hawaiian or Other Pacific Islander', value: 'Native Hawaiian or Other Pacific Islander'},
        {label: 'Hispanic or Latino', value: 'Hispanic or Latino'},
      ];


function QuestionPage() {
    
    return (
        <div>
            <Questions />
            <AnswerCard socialMedia={socialMedia} raceEthnicity={raceEthnicity} />
         </div>
    )
};


export  { items };
export default QuestionPage;


