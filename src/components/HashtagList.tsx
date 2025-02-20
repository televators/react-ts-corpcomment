const tempTags = [
  'Acme',
  'ByteGrad',
  'Amazon',
  'Cenodyne',
  'Canis Stellar',
];

const HashtagList = () => {
  return (
    <ul className="hashtags">
      { tempTags.map( ( tag ) => {
        return (
          <li key={ tag.replace( ' ', '' ).toLowerCase() }>
            <button>
              <span>#{ tag.replace( ' ', '' ) }</span>
            </button>
          </li>
        );
      } ) }
    </ul>
  );
}

export default HashtagList;
