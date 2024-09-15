import { TriangleUpIcon } from "@radix-ui/react-icons";

const FeedbackListItem = ( { item } ) => {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>593</span>
      </button>

      <div>
        <p></p>
      </div>

      <div>
        <p>ByteGrad</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi nemo deserunt voluptate, laudantium cum tenetur?</p>
      </div>

      <p>4d</p>
    </li>
  );
}

export default FeedbackListItem;
