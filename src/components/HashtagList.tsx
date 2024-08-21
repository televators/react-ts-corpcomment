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
      { tempTags.map( tag => {
        return (
          <li>
            <button>#{ tag.replace( ' ', '' ) }</button>
          </li>
        );
      } ) }
    </ul>
  );
}

export default HashtagList;
