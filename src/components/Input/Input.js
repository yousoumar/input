import './Input.css';

export default function Input({ label = "label", placeholder = "placeholder", InputName, disabled, icon, error,  helperText, startIcon, endIcon }) {
    
    return (
        
        <div className={"label-input-icon " + (error ? "error" : "")}>
         
            {helperText && <div className = "helper-text">{helperText}</div>}

            <div className={"input-icon " + (startIcon ? "contain-start-icon " : "") + (endIcon ? "contain-end-icon" : "")}>
                <input 
                    id ={InputName }
                    className = {(disabled ? "disabled" : "")} 
                    disabled = {disabled ? true : false}
                    placeholder = {placeholder}  
                />
                {startIcon && <span className = "icon start-icon"><img src={startIcon} alt="" /></span>}
                {endIcon && <span className = "icon end-icon"><img src={endIcon} alt="" /></span>}
            </div>
            
            <label htmlFor={InputName }>Label</label>
  
          
        </div>
        
       
        
    )
}