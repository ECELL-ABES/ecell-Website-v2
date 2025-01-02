import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
    render() {
        const mapStyles = {
            width: '100%',
            height: '400px'
        };

        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: 37.774929,
                    lng: -122.419416
                }}
            >
                <Marker position={{ lat: 37.774929, lng: -122.419416 }} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
})(MapContainer);
