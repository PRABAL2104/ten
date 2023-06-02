// 1. Props in react
export default function Student( props ) {
    console.log(props.name)
    return (
        <div style={{backgroundColor:"skyblue", margin : 10}}>
            <h1> Hello {props.name}</h1>
        </div>
    )
}

