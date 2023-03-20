import Questions from '../components/Questions';
import AnswerCard from '../components/AnswerCard';

        
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
        <div className='place-content-end'>
              <Questions className='h-96' />
              <AnswerCard />
         </div>
    )
};

export default QuestionPage;


