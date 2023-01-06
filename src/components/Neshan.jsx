import React, { useState } from "react";
import NeshanMap, {NeshanMapLoader} from "react-neshan-map-openlayers";

const Neshan = () => {
  const [ol, setOl] = useState();

  return (
    <>
      <NeshanMapLoader onLoad={setOl}>
        {ol && (
          <NeshanMap
          
            options={{
              key: "web.07cd78a17b1f4103b7b7ff9be5a9dca5",
              maptype: "dreamy",
              poi: true,
              traffic: true,
              view: new ol.View({
                center: ol.proj.fromLonLat([51.338076, 35.699743]),
                zoom: 14,
              }),
            }}
            onInit={(myMap) => {
              var layer = new ol.layer.Vector({
                source: new ol.source.Vector({
                  features: [
                    new ol.Feature({
                      geometry: new ol.geom.Point(
                        ol.proj.fromLonLat([51.338072, 35.699750])
                      ),
                    }),
                  ],
                }),
                style: new ol.style.Style({
                  image: new ol.style.Icon({
                    color: "#BADA55",
                    crossOrigin: "anonymous",
                    src:
                      "https://iili.io/HR0TkeS.png",
                  }),
                }),
              });

              myMap.addLayer(layer);

            }}
          />
        )}
      </NeshanMapLoader>
    </>
  );

};
export default Neshan;

