import Questions from '../components/Questions';
import AnswerCard from '../components/AnswerCard';
import TestCard from '../components/TestCard';

function QuestionPage() {
    
    return (
        <div className="">
            <div className="">
                <Questions />
            </div>
            <div className="">
                <AnswerCard />
            </div>
        </div>
        // <div className='container'>
        //     <div className='container-question'>
        //       <Questions />
        //         <div className=''>
        //             <AnswerCard />
        //         </div>
        //     </div>
        //       {/* <AnimatedBackground /> */}
        //       {/* <TestCard /> */}
        //  </div>
    )
};

export default QuestionPage;


