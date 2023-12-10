import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.openweathermap.org/data/2.5'}),
    tagTypes: ['Weather'],
    endpoints: builder =>({
        getWeather: builder.query({
            query: town =>({
                url: `weather?q=${town}&lang={ru}&appid=c8ecd23ebf169ffb4dfebeed690029ae&units=metric`
            }),
            providesTags: ['Weather']
        })
    })
})

export const {useGetWeatherQuery} = apiSlice;