import Button from './components/Button';
import { BiAccessibility, BiAdjust } from "react-icons/bi";

function ButtonPage() {
  const handleClick = () => {
    console.log('Click!');
  };

  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick}>
          <BiAccessibility />
          Click me!!
        </Button>
      </div>
      <div>
        <Button 
          secondary 
          onClick={handleSubmit} >
          <BiAdjust />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success onMouseOver={handleMouseOver}>
          See Deal!
          </Button>
      </div>
      <div>
        <Button warning >
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
