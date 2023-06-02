// 10. Update Data and Update Count
// import React, { useEffect } from 'react'

// function Users(props) {
//     useEffect(()=> {
//         // alert(" count is " + props.count)
//     }, [props.count])
//   return (
//     <div>
//       <h1>Count Props : {props.count}</h1>
//       <h1>Data Props : {props.data}</h1>
//     </div>
//   )
// }
// export default Users

// 11. Pure Component
import React,{PureComponent} from "react"

class Users extends React.Component {
  render()
  {
    console.warn("user component check-rendering")
    return (
      <div>
        <h1>User Component { this.props.count}</h1>
      </div>
    )
  }
}

export default Users;

// class Users extends React.Component {
//   render()
//   {
//     console.warn("user component check-rendering")
//     return(
//       <div>
//         <h1>User Component {this.props.count}</h1>
//       </div>
//     )
//   }
// }

// export default Users