import Child from "./Child";


const Parent = () => {
  
  const oneString = "Hello React";  
  const twoString = "Props Example";

  const oneNumber = 100;

  const oneObject = {
    name: "ranjith",
    age: 21,
    job: "fullstack"
  };

  const oneArray = ["Virat", "Rohit", "Dhoni"];

  const arrayOfObjects = [
    { id: 1, team: "CSK", captain: "Dhoni" },
    { id: 2, team: "RCB", captain: "Kohli" },
    { id: 3, team: "foodball", captain: "Ronaldo" }
  ];

  return (
    <>
      <h1>Parent Component</h1>

      <Child 
        oneString={oneString}
        twoString={twoString}
        oneNumber={oneNumber}
        oneObject={oneObject}
        oneArray={oneArray}
        arrayOfObjects={arrayOfObjects}
      />
    </>
  )
}

export default Parent;
