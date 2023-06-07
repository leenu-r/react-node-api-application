const Image = (props) => {
  const { image } = props;

  return <img src={image} alt="Not Available" width="250" height="250" />;
};
export default Image;
