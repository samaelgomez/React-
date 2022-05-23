import PropTypes from "prop-types"
import {UserModel} from "../model";

const ValidateLogin = (props) =>{
        const t = console.error
        console.error = msg => {throw msg}   

       PropTypes.checkPropTypes(UserModel, props, 'prop', 'ValidateLogin')
        console.error = t
       
        return {error:false}
    
}

export {
    ValidateLogin
}