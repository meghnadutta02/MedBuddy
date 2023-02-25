
import CategoryCardComponent from "../../components/CategoryCardComponent";
import { Row, Container } from "react-bootstrap";
import ServicesComponent from "../../components/ServicesComponent";
import { useEffect, useState } from "react";
import MetaComponent from "../../components/MetaComponent";
import InfoComponent from "../../components/InfoComponent";
import NutritionComponent from "../../components/NutritionComponent";
import EmergencyComponent from "../../components/EmergencyComponent";
import MentalHealthComponent from "../../components/MentalHealthComponent";
const HomePageComponent = ({ categories, getBestsellers }) => {
  
    const [mainCategories, setMainCategories] = useState([]);
    const [bestSellers, setBestsellers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        getBestsellers()
        .then((data) => {
            setBestsellers(data);
        })
        .catch((er) => {
            setError(er.response.data.message ? er.response.data.message : er.response.data)
           console.log(er.response.data.message ? er.response.data.message : er.response.data) 
        });
        setMainCategories((cat) => categories.filter((item) => !item.name.includes("/")));
    }, [categories])

  return (
    <>
    <MetaComponent />
      {/* <ProductCarouselComponent bestSellers={bestSellers} /> */}
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
        {/* //appointments */}
             <ServicesComponent/>
            <CategoryCardComponent /> {/*medicines*/}
            <EmergencyComponent/>
            <MentalHealthComponent/>
            <NutritionComponent/>
            <InfoComponent/>
            
        </Row>

        {error}
      </Container>
    </>
  );
};

export default HomePageComponent;
