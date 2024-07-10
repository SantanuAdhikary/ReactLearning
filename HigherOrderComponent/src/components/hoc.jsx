

//! we are creating one function hoc()

let hoc =(WrappedComponent)=>{

    //! here we have to return one component Hoc

    return function Hoc(props){

        return(
            <>
            <p>this is message from HOC</p>
            <WrappedComponent {...props}/>
            </>
        )
    }
}

export default hoc;


