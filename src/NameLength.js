function NameLength(props) {
    const {name , nameLength} = props
    return <>
    <p className="name-length">
    Did you know that {name} is {nameLength} characters long?!
  </p>
  </>
}

export default NameLength