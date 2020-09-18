import React from 'react';
import "./BlogListItem.css";

class BlogListItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isTextToggled: false,
            text: "",
            showText: "",
            sideClass: "",
            index: 0,
            title: "",
            date: ""
        };
        this.prepareText();
    }
   
    
    render() {
        return(
            <li className={this.props.sideClass} key={this.props.index}> 
                <div className="blogItemDate">{this.props.date}</div>
                <div className="blogItemTitle">{this.props.title}</div> 
                <div id="blogItemText" onClick={() => {this.onTextClick(); }}>{this.state.showText}</div>
            </li> 
        );
    }


    prepareText(){
        if (this.props.text.length > 200) {
            this.state = {
                isTextToggled: true,
                showText: this.props.text.substring(0,150) + "... Click to expand"
            }; 
        };
    };

    onTextClick(){
        if (this.state.isTextToggled){
            this.setState({
                showText: this.props.text,
                isTextToggled: false
            });
        }else{
            this.setState({
                showText: this.props.text.substring(0,150) + "... Click to expand",
                isTextToggled: true
            });
        }
    };

};

export default BlogListItem;