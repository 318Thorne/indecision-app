import React from 'react'
import Option from './Option';

const Options = (props) => 
    (
        <div>
        <div className="widget-header"> 
            <h3 className="widget-header__title">your options</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}>
                remove all
            </button>
        </div>

            {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
            {props.options.map((item, index) => 
            (
                <Option 
                    item={item} 
                    key={index} 
                    handleDeleteSingular = {props.handleDeleteSingular}/>
            )
            )}
        </div>
    );

export default Options;