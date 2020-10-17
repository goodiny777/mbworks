import React from 'react';
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
import DialogTitle from '@material-ui/core/DialogTitle';

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
        selectedTitle: "",
        windowWidth: null
      };
  } 

  componentDidMount(){
    const storage = firebase.storage();
    const sertificatesRef = storage.ref().child('mbworks/images/');
    window.addEventListener('resize', ()=>{this.handleResize(this)});
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
          if (data.length === allData.length){
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

  handleResize(weakThis){
    console.log(weakThis);
    if(weakThis.state.windowWidth != window.innerWidth){
      weakThis.setState({
        windowWidth: window.innerWidth
      });
    }
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
              <img className="dialog-image" alt={this.state.selectedTitle} src={this.state.selectedImage}/>
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
                  <GridList cols={this.state.windowWidth < 500 ? 2: 3} cellHeight={180} className="gridList">
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
