const Child = (props) => {
  console.log(props);

  return (
    <>
      <h2>Child Component</h2>

      <p>One String: {props.oneString}</p>
      <p>Two String: {props.twoString}</p>
      <p>One Number: {props.oneNumber}</p>

      <p>Object Value: {props.oneObject.name} - {props.oneObject.age} - {props.oneObject.job}</p>

      <p>Array: {props.oneArray.join(", ")}</p>

      <h3>Array of Objects:</h3>
      <ul>
        {props.arrayOfObjects.map((item) => (
          <li key={item.id}>
            {item.team} — Captain: {item.captain}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Child;
