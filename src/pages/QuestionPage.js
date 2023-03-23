import Questions from '../components/Questions';
import AnswerCard from '../components/AnswerCard';
import Loader from '../components/Loader';

function QuestionPage() {
    
    return (
        <div className='place-content-end'>
              <Questions className='h-96' />
              <AnswerCard />
         </div>
    )
};

export default QuestionPage;


