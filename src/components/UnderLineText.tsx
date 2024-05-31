function UnderLineText({text}:{text:string}) {
    return ( 
        <div className="mb-3">
            <h3 className="font-[600] text-3xl text-[#fff] ">{text}</h3>
            <label>
                <progress max="100" value="60"></progress>
            </label>
        </div>
     );
}

export default UnderLineText;