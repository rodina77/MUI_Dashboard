import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import RecipeReviewCard from "../../Cards/CardContainer";

import "./index.css";

export default function MapChart() {
  return(
    <>
    <RecipeReviewCard>
    <ComposableMap style={{  width:'100%' , height:'100%' }}>
      <Geographies geography="/feature.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
    </RecipeReviewCard>
  </>
  )
};
