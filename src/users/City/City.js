import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCity, deleteCityAction } from "../../redux/CityRedux";
import { Link } from "react-router-dom";
import Sidebar from "../../components/SideNav";
// MUI
// import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function City() {
    const cityData = useSelector(state => state.cities.data);

    const dispatch = useDispatch();

    const deleteCity = city => dispatch(deleteCityAction(city));

    const initFetch = useCallback(() => {
        dispatch(getCity());
    }, [dispatch]);

    useEffect(() => {
        initFetch();
    }, [initFetch]);

    const onDelete = event => {
        event.preventDefault();
        deleteCity(event.target.id);
        console.log(event.target.id);
    };

    // const [cityList, setCityList] = useState([]);
    // useEffect(() => {
    //     async function fetchCity() {
    //         const fetchItem = await fetch(
    //             `/cityByCityId?id=3bhJa26hT9nbSfCvSzhp`
    //         );
    //         const cityList = await fetchItem.json();
    //         setCityList(cityList);
    //     }
    //     fetchCity();
    // }, []);
    return (
        <div id="wrapper">
            <Sidebar />
            <div className="page-content-wrapper">
                <Row>
                    <Col>
                        <h4>City List Page</h4>
                    </Col>
                    <Col className="text-right">
                        <Link
                            className="btn btn-success btn-md"
                            to="/dashboard/CreateActivity"
                        >
                            Add City
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <td>City Name</td>
                                    <td className="text-center">Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {cityData &&
                                    cityData[0].map(city => (
                                        <tr key={city.id}>
                                            <td>{city.name}</td>
                                            <td className="text-center">
                                                <Link
                                                    to={`/dashboard/updateCity/${city.id}`}
                                                    className="btn btn-primary btn-md mr-2"
                                                >
                                                    <i class="fas fa-pencil-alt"></i>
                                                </Link>

                                                <Button
                                                    className="btn btn-danger btn-md"
                                                    variant="danger"
                                                    id={city.id}
                                                    onClick={onDelete}
                                                >
                                                    <i class="fas fa-trash-alt"></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default City;
