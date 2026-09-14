const WelcomeMessage = (/*{ onGetPostsClicked }*/) => {
  return (
    <center className="welcome-message">
      <h1>There are no Posts!</h1>
      {/* <button
        type="button"
        onClick={onGetPostsClicked}
        className="btn btn-primary"
      >
        Get Posts from Server
      </button> */}
    </center>
  );
};

export default WelcomeMessage;
