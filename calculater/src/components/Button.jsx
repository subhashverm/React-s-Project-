const Button=({onButtonClick})=>{
    const button=['0','1','C','2','3','+','4','5','-','6','7','*','8','9','=','/','.'];
    return(
        <div className="button">
            {button.map((button)=>
                <button className="btn btn-primary" key={button}
                onClick={()=>onButtonClick(button)}>{button}</button>)}
        </div>
    );
}
export default Button;
