import React from "react"
import { useField, ErrorMessage } from "formik"
import styled from "styled-components"


export const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props)
    // console.log(field, meta);


    return (
        <div>
            <Label htmlFor={field.name}>{ label}</Label>
            <Input
            className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field}{...props}
                autoComplete='off' />
            <Error><ErrorMessage className="error" component="div" name={field.name} /></Error>
            
        </div>
    )

}
    
const Label = styled.label`
font-size: 1.5rem;
`

const Input = styled.input`
.form-control{
    &:focus{
        background: #F0F0FF;
    }
}
`
const Error = styled.div`
  position: absolute;
  color: red;
  font-size: 1.5rem;
`


// label {
//   font-size: .7rem;
// }

// input.form-control, input.form-control:focus {
//   background: #F0F0FF;
// }

// .error {
//   position: absolute;
//   color: red;
//   font-size: .6rem;
// }