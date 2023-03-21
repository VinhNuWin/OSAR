import Questions from '../components/Questions';
import AnswerCard from '../components/AnswerCard';

function QuestionPage() {
    
    return (
        <div className='place-content-end'>
              <Questions className='h-96' />
              <AnswerCard />
         </div>
    )
};

export default QuestionPage;


