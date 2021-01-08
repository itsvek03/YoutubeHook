import React, { useEffect, useState } from 'react';
import SelectedVideo from './SelectedVideo'
import Suggestions from './Suggestions'
import SearchInput from './SearchInput'
import axios from "axios"


export default function App() {
    const [inputdata, setinputdata] = useState('Dil Bechara');
    const [videolist, setvideolist] = useState([])
    useEffect(() => {
        async function SuggestionVideo() {
            let response = await axios.get(
                "https://www.googleapis.com/youtube/v3/search",
                {
                    params: {
                        q: inputdata,
                        type: "video",
                        part: "snippet",
                        maxResults: 10,
                        key: "AIzaSyAWNoZkFaR6DKnHdXdyJlitrYtKCQg5yc0",
                    },
                }
            );
            console.log(response)
            setvideolist(response.data.items);
            return response;
        }
        SuggestionVideo();
    }, [inputdata])


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="container mt-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card text-left shadow-lg">
                                        <div className="card-body">
                                            <SearchInput
                                                setinputdata={setinputdata}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="container-fluid mt-5 p-2">
                            <div className="row">
                                <div className="col-md-8">
                                    <SelectedVideo />
                                </div>
                                <div className="col-md-4">
                                    <Suggestions
                                        videolist={videolist}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
