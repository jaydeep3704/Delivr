import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    selectedLocations: [{
      pincode: 400001,
      area: "Mumbai",
      lat: 18.934662,
      lng: 72.836778,
      district: "Raigarh(MH)",
      state: "Maharashtra"
    }],
    currentLocation: {
      pincode: 400001,
      area: "Mumbai",
      lat: 18.934662,
      lng: 72.836778,
      district: "Raigarh(MH)",
      state: "Maharashtra"
    },
    locationSearchVisible:false
  },
  reducers: {
    addLocation: (state, action) => {
      // Add new location to the list of selected locations
      if( !state.selectedLocations.find((location)=>location.lat==action.payload.lat))
      {
        state.selectedLocations.push(action.payload);
      }
     
    
    },
    setCurrentLocation: (state, action) => {
      // Set the current location
      state.currentLocation = action.payload;
    },
    removeLocation: (state, action) => {
      // Remove location from selected locations based on area
      state.selectedLocations = state.selectedLocations.filter(location => location.area !== action.payload.area);
    },
    setLocationSearchVisible:(state,action)=>{
        state.locationSearchVisible=action.payload
    }

  }
});

export const { addLocation, setCurrentLocation, removeLocation ,setLocationSearchVisible} = locationSlice.actions;
export default locationSlice.reducer;
