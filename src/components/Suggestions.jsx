import React, { useState } from 'react';
import Items from './Items'

export default function Suggestions(props) {
    console.log(props)
    // const [se, SetSe] = useState(setSelectVideo)
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        {
                            props.videolist.map((item) => {
                                return (
                                    <Items
                                        key={item.id.videoId}
                                        setSelectVideo={props.setSelectVideo}
                                        items={item}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    );
}
