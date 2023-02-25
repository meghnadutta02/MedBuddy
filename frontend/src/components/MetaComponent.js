import { Helmet, HelmetProvider } from "react-helmet-async";

 const MetaComponent = ({ title = "Best online shop", description="Example description" }) => {
    return (
       <HelmetProvider>
           <Helmet>
              <title>{title}</title> 
              <meta name="description" content={description} />
           </Helmet>
       </HelmetProvider> 
    )
 }

 export default MetaComponent