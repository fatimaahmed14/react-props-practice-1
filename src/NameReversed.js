function NameReversed(props) {
    const {name , nameReversed} = props
    return <>
     <p className="name-reversed">
        Also, {name} backwards is {nameReversed}
      </p>   
  </>
}

export default NameReversed