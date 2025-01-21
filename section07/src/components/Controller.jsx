const Controller = ({ onClickbutton }) => {
  return (
    <div>
      <button
        onClick={() => {
          onClickbutton(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onClickbutton(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onClickbutton(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          onClickbutton(+1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          onClickbutton(+10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          onClickbutton(+100);
        }}
      >
        +100
      </button>
    </div>
  );
};

export default Controller;
