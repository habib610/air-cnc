import React, { useEffect } from 'react';
import { Button, Col, Container, Row, Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMyOrderList } from '../Actions/userAction';
import Loader from '../components/Loader';
import Message from '../components/Message';
const MyOrder = ({history}) => {
    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;
    const dispatch = useDispatch();
    useEffect(() => {
        if (!userInfo.email) {
          history.push("/signin");
        }
      }, [userInfo, history]);

      useEffect(()=>{
          if(userInfo && userInfo._id)
          dispatch(getMyOrderList(userInfo._id))
      },[dispatch, userInfo])
      const getMyOrder = useSelector((state) => state.getMyOrder);
      const { error, loading, orderMine } = getMyOrder;
    return (
        <Container>
           <h1 className="font-weight-bold text-center my-2">All Order List</h1>
      <Row>
        <Col md={12}>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Order id</th>
                <th>Payment</th>
                <th>Confirmation</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : (
                <>
                  {orderMine.length !== 0 &&
                    orderMine.map((item, index) => (
                      <tr key={item._id}>
                        <td>{index}</td>
                        <td className="font-weight-bold">#{item._id}</td>
                        <td>
                          <Button
                            variant={
                              item.isPaid
                                ? "success btn-block"
                                : "danger btn-block"
                            }
                          >
                            {item.isPaid ? "Paid" : "Not Paid"}
                          </Button>
                        </td>
                        <td>
                          <Button
                            variant={
                              item.isConfirmed
                                ? "success btn-block"
                                : "danger btn-block"
                            }
                          >
                            {item.isConfirmed ? "Confirmed" : "Pending"}
                          </Button>
                        </td>
                        <td>
                            <Link to={`/order/${item._id}`}><Button
                          variant="secondary btn-block">Details</Button></Link>

                        </td>
                      </tr>
                    ))}
                </>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
        </Container>
    );
};

export default MyOrder;