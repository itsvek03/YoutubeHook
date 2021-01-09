import React, { useEffect, useState } from 'react';

export default function Items(props) {
    //console.log("Items", props)
    return (
        <>
            <div className="mt-4">
                <div
                    className="card text-left shadow-lg"
                    onClick={() => { props.setSelectVideo(props.items) }}
                >
                    <div className="card-body">
                        <img
                            className="img img-responsive img-fluid"
                            src={props.items.snippet.thumbnails.high.url}
                            alt="Laoding.."
                        />
                        <hr />
                        <h4 className="card-title">{props.items.snippet.title}</h4>
                        <p className="card-text">{props.items.snippet.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
