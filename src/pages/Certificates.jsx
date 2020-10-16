import React, {useState} from 'react';
import "./Certificates.css";
import firebase from '../Firebase';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import cert_html from '../assets/certificates/cert_html.jpg';
import cert_css from '../assets/certificates/cert_css.jpg';
import cert_js from '../assets/certificates/cert_js.jpg';
import cert_java from '../assets/certificates/cert_java.jpg';
import cert_sql from '../assets/certificates/cert_sql.jpg';
import cert_jquery from '../assets/certificates/cert_jquery.jpg';
import cert_hg_schoole from '../assets/certificates/highschool.jpg';
import cert_hackeru from '../assets/certificates/cert_hackeru.jpg';
import ibm_hackaton from '../assets/certificates/ibm_hackaton.jpeg';
import cert_node_js from '../assets/certificates/cert_node_js.png';
import cert_helsinki_ai from '../assets/certificates/certificate_elements_of_ai.png';
import cert_analitics from '../assets/certificates/cert_analitics.jpg';

export default class Certificates extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        items: [],
        isTitleToggleOn: false,
        open: false,
        selectedImage: "",
        selectedTitle: ""
      };
  } 

  componentDidMount(){
    const storage = firebase.storage();
    const sertificatesRef = storage.ref().child('mbworks/images/');

    sertificatesRef.listAll()
    .then((res) => {
      var data = [];
      var allData = res.items;
      res.items.forEach(ref => {
        ref.getDownloadURL()
        .then((url) => {
          data.push({image: url, title: ref.name.split('.')[0] });
        })
        .catch((err) => {
          this.setState({
            isLoaded: true,
            error:err
          });
        })
        .finally(() => {
          if (data.length == allData.length){
            data.sort((p0, p1) => {
              return p0.title.split('_')[1] - p1.title.split('_')[1] 
            });
            data.forEach((el) => { 
              el.title = el.title.split('_')[0] 
            });
            this.setState({
              isLoaded:true,
              items: data
            })
          }
        });
      })
    })
    .catch((err) => {
      this.setState({
        isLoaded: true,
        error:err
      });
    });

  }

  selectPhoto = (image) => {
    this.showImageFullSize(image)
   
  }

  handleClickOpen = (tile) => {
    this.setState({ 
      open: true,
      selectedImage: tile.image,
      selectedTitle: tile.title
    });
  }

  handleClose = () => {
    this.setState({ open: false});
  }

  showImageFullSize = () =>{
    return <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{this.state.selectedTitle}</DialogTitle>
        <DialogContent>
          <DialogContent>
            <div>
              <img className="dialog-image" src={this.state.selectedImage}/>
            </div>
          </DialogContent>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={this.handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        return(
          <div className="bg-dark">
            <Navbar/>
              <div className="container">
                <div className="bg-dark root">
                  <GridList cols={3} cellHeight={180} className="gridList">
                    {items.map((tile) => (
                      <GridListTile key={tile.image} onClick={ () => this.handleClickOpen(tile)}>
                        <img className="image-cert" src={tile.image} alt={tile.title} />
                        <GridListTileBar subtitle={tile.title}/>
                      </GridListTile>
                    ))}
                  </GridList>
                </div>
              </div>
              {this.showImageFullSize()}
            <Footer/>
          </div>
        );
    }
  }

}
