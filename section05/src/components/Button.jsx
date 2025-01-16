const Button = ({ text, color, children }) => {
  // 이벤트 객체
  const onClickbutton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickbutton}
      onMouseEnter={onClickbutton}
      style={{ color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
