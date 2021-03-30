import React, { useState } from "react";
import { Col, Container, Form, Row, Image } from "react-bootstrap";
import Loader from "../components/Loader";
import axios from 'axios'

const UploadProduct = () => {
    const [uploading, setUploading] = useState(false)
    const [image, setImage] = useState('')

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
            setImage(data)
            setUploading(false)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(image)
  return (
    <Container>
      <Row>
          <Col md={6} className="m-auto">
          <h3 className="text-success my-3">Upload A New Product</h3>
          <Form>
        <Image src={image && image} />
        <Form.Group>
          <Form.Label>Thumbnail</Form.Label>
          <Form.Control type="file"  onChange={uploadImageHandler} />
        </Form.Group>
        {
            uploading && <Loader />
        }
        
      </Form>
          </Col>
      </Row>
    </Container>
  );
};

export default UploadProduct;
