import React from 'react'

const ButtonComponent = (props) => {
  const {onClick} = props
  return (
    <div>
        <button  className='btn btn-primary d-flex justify-center mt-4 m-auto' onClick={() => onClick()}>{props.test}</button>
    </div>
  )
}

export default ButtonComponent