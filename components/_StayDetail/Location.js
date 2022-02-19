import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useState } from "react";

import Typography from 'antd/lib/typography';
import { useTranslation } from "next-i18next";

const { Title } = Typography;

const containerStyle = {
  width: "100%",
  height: "370px"
};

function Location({ data }) {
  const { t } = useTranslation('common')
  const [map, setMap] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY
  });

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const center = {
    lat: data?.latitude * 1,
    lng: data?.longtitude * 1
  };

  return (
    <div>
      <Title
        level={3}
        style={{ fontWeight: 500, letterSpacing: ".03em", marginBottom: 20 }}
      >
        {t("Where's the location")}
      </Title>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        />
      )}
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.3440360874915!2d119.89443961474562!3d-8.465886293912687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db46539605cb4a9%3A0xea86e4cbefd33528!2sOne%20Tree%20Hill%20Hostel!5e0!3m2!1sen!2sid!4v1615035139215!5m2!1sen!2sid"
        width="100%"
        height="370"
        style={{ border: 0, borderRadius: 8, overflow: "hidden" }}
        allowFullScreen=""
        loading="lazy"
      /> */}
    </div>
  );
}




export default React.memo(Location)