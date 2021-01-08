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
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="form-group col-sm-10">
                        <form className="form-inline" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                value={searchvalue}
                                onChange={e => setsearchvalue(e.target.value)}
                            />

                            <div className="form-group col-sm-2">
                                <button type="button" className="btn btn-primary form-control">Search</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}
