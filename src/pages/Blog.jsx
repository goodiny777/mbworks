import React from 'react';
import firebase from '../Firebase';
import './Blog.css';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import BlogListItem from '../components/BlogListItem.jsx';

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
          };
    }

    componentDidMount() {
      const db = firebase.firestore();
      var allDocs = []
      db.collection("blogData").get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          allDocs.push(doc.data());
        });
        this.setState({
          isLoaded:true,
          items:allDocs.sort((id) => id)
        });
      })
      .catch((err) => {
        this.setState({
          isLoaded: true,
          error:err
        });
      });
    }
    
    render() {
      const { error, isLoaded, items } = this.state;

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
          return(
              <div>
                  <Navbar/>
                  <ul>
                    { items.sort(compare).map(function(object){
                      console.log(items.sort(compare))
                      return <BlogListItem date = {object.date} title = {object.blogTitle} text={object.blogMessage} sideClass={object.sideClass} index={object.id} />
                    })}
                  </ul>
                  <Footer/>
              </div>
          );
      }
    } 

}

function compare(a, b) {
  const objAId = a.id;
  const objBId = b.id;

  let comparison = 0;
  if (objAId < objBId) {
    comparison = 1;
  } else if (objAId > objBId) {
    comparison = -1;
  }
  return comparison;
}

export default Blog;