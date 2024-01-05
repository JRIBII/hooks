import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const AddMovie = ({zidMovie}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Title, setTitle] = useState("")
  console.log(Title)
  const [Description, setDescription] = useState("")
  const [posterUrl, setPosterUrl] = useState("")
  const [Rate, setRate] = useState("")
  const Addone=()=>{
    const newMovie={
      title:Title,
      description:Description,
      posterUrl:posterUrl,
      rate:Rate
    }
    console.log(newMovie)
    zidMovie(newMovie)
    handleClose()
  }

    return (
      <div>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Add new movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="post" style= {{display: "flex",flexDirection: "column"}}>
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" onChange={(e)=>setTitle(e.target.value)}/>
              <label htmlFor="description">Description</label>
              <input type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)}/>
              <label htmlFor="posterUrl">Poster Url</label>
              <input type="text" name="posterUrl" id="posterUrl" onChange={(e) => setPosterUrl(e.target.value)}/>
              <label htmlFor="rate">Rate</label>
              <input type="text" name="rate" id="rate" onChange={(e) => setRate(e.target.value)}/>
            </form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={Addone}>
              add film
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    )
  }

export default AddMovie