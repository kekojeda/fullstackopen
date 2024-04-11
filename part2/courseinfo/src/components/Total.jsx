const Total = ({course}) => {

  let totalReduceObj = course.parts.reduce((acc, currentValue) => {
    return  acc + currentValue.exercises
  },0)


    return (
      <>
        <p><b>Total of {totalReduceObj}</b></p>
      </>
    )
  }

  export {Total}