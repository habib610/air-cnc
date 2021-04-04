import React, {  useState } from "react";
import { Col, Container, Form, Row, Button, Alert } from "react-bootstrap";
import guideImage from '../rowdra.jpg'
import frontImage from '../frontView.jpeg'
import InnerImage from '../InnerView.jpeg'
import Loader from "../components/Loader";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { uploadTripAction } from "../Actions/tripActions";
import Message from "../components/Message";
import { Helmet } from "react-helmet";

const UploadProduct = () => {
    const [uploading, setUploading] = useState(false)
    const[name, setName] = useState('')
    const [total, setTotal] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [perPerson, setPerPerson]= useState(30)
    const [place, setPlace]= useState('')
    const [thumbnail, setThumbnail]= useState('')
    const [location, setLocation]= useState('')
    

    const numReviews = 0
    const rating = 0;
    const guestCapacity = 1
    const bedrooms = 2
    const beds = 4
    const baths = 2
    const cleaner = 3
    const frontView = frontImage
    const innerView = InnerImage
    const guideThumbnail = guideImage
    const superHost = "Rowdra"

const dispatch = useDispatch()
const uploadTrip = useSelector(state => state.uploadTrip)
const {  error,} = uploadTrip

   



    const uploadImageHandler = async(e)=> {
        const file = e.target.files[0]
        const bodyFormData = new FormData()
        bodyFormData.append('image', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            }
            const {data} = await axios.post('/api/upload/', bodyFormData, config)
            setThumbnail(data)
            setUploading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(uploadTripAction({name, total, category, description,perPerson,place, thumbnail, location, numReviews, rating, guestCapacity, bedrooms, beds, baths, cleaner, frontView, innerView, guideThumbnail, superHost}))
    }

  return (
    <Container>
      <Helmet>
            <title>UPLOAD NEW TRIP</title>
          </Helmet>
      <Row>
          <Col md={8} className="m-auto">
            {
              uploadTrip.message && <Alert variant="success">{uploadTrip.message}</Alert>
            }
        
            {

             uploadTrip.error && <Message variant="danger">{error}</Message>
            }
            
          <h3 className="font-weight-bold text-center my-2">Upload A New Trip</h3>
          <Form onSubmit={handleSubmit}>

          <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                required
                  type='name'
                  placeholder='Enter name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
  
              <Form.Group controlId='price'>
                <Form.Label>Total</Form.Label>
                <Form.Control
                  type='number'
                  required
                  placeholder='Enter price'
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='perPerson'>
                <Form.Label>perPerson</Form.Label>
                <Form.Control
                  type='number'
                  required
                  placeholder='perPerson'
                  value={perPerson}
                  onChange={(e) => setPerPerson(e.target.value)}
                ></Form.Control>
              </Form.Group>

        <Form.Group  controlId='image'>
          <Form.Label>Thumbnail</Form.Label>
          <Form.File
          custom
          id='image-file'
          required
          label='Choose File'
          type="file"  onChange={uploadImageHandler} />
        </Form.Group>
        {
            uploading && <Loader />
        }


  
              <Form.Group controlId='category'>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type='text'
                  required
                  placeholder='Enter category'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                ></Form.Control>
              </Form.Group>
  
              <Form.Group controlId='description'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type='text'
                  required
                  placeholder='Enter description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='location'>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type='text'
                  required
                  placeholder='Enter Location'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='place'>
                <Form.Label>Place</Form.Label>
                <Form.Control
                  type='text'
                  required
                  placeholder='Enter Place'
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type='submit' variant='primary'>
                upload
              </Button>
        
      </Form>
          </Col>
      </Row>
    </Container>
  );
};

export default UploadProduct;
