function Hello(){

  let myName = 'Aman Mishra';
  let fullName = () => {
    return 'Aman Mishra';
  }
  let entryNo = "24bcs009";

  return <h3>
    Hello Guys, Aman Speaking.
    {/* Hello Guys, I am {myName} */}
    <br />
    Hello Guys, I am {fullName()} having Entry Number {entryNo}
  </h3>
}

export default Hello;