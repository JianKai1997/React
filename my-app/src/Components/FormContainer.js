import React, {Component} from "react"
import FormComponent from "C:/Users/shink/my-app/src/Components/FormComponents"
import uf from "C:/Users/shink/my-app/src/Components/FormUsers"

class Form extends Component {
    constructor() {
        super()
        this.state = {
            lolpp : uf
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        }) 
    }
    
    render() {
        return(
            <FormComponent
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }
}

export default Form
