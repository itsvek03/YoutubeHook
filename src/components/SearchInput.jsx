import React, { useState } from 'react';

export default function SearchInput({ setinputdata }) {
    const [searchvalue, setsearchvalue] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setinputdata(searchvalue)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <div className="col-md-10">
                                    <input

                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        value={searchvalue}
                                        onChange={e => setsearchvalue(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-2 mt-2 justify-content-center">
                                    <button type="button" className="btn btn-primary form-control">Search</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </>
    );
}
