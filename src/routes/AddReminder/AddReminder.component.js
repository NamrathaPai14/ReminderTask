import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const NAME="name";
export const TIME="time";
export const DESCRIPTION="description";
export const CATEGORY="category";
export const IMAGE="image";

/**
 * @class AddReminder
 */
export class AddReminder extends Component {

    /**
     * @function backButton
     * @return {<DOM>}
     */
    backButton = () => {
        return (
            <div className="AddMenu-back">
                <Link to="/reminder" className="back"
                >Back</Link> 
            </div>
        )
    }

    /**
     * @function saveInput
     * @return {<DOM>}
     */
    saveInput = () => {
        const {
            saveFormValue,
            getImage
        } = this.props

        return(
            <div 
                className = "form-card"
            >
                <div
                    className = "card-title"
                >
                    <div className="title">Add New Reminder </div>
                </div>
                <div 
                    className="form-input"
                >
                    <div 
                        className = "card-content"
                    >
                        <label>Name:</label>
                        <input type = "text" id={ NAME } /><br/>
                        <label>Time:</label>
                        <input type = "text" id={ TIME }/><br/>
                        <label>Description:</label>
                        <textarea type="text" id={ DESCRIPTION } rows="3" cols="14"></textarea><br/>
                        <label>Image: <input type="file" id={ IMAGE }  accept="image/*" onChange={()=> getImage()}/></label><br />
                        <button 
                            onClick={()=> saveFormValue()}
                        >Submit</button>
                        <button>
                            <Link to="/reminder" className="back"
                            >Cancel</Link>
                        </button>
                    </div>
                </div>
            </div>   
        )
    }

    render() {
        return (
            <div className="AddReminder-container">
                <div>
                    { this.backButton() }
                </div>
                <div className = "form-input">
                    { this.saveInput() } 
                </div>
            </div> 
        );
    }
}

export default AddReminder;