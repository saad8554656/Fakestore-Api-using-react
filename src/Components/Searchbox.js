import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { searchCategoryName } from '../Slices/searchSlice';

export default function Searchbox() {
    const dispatch = useDispatch();
    const catname = useRef();

    const searchData = () => {
        const categoryName = catname.current.value;
        console.log(categoryName);
        dispatch(searchCategoryName(categoryName));
    };

    return (
        <div className="container my-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="input-group">
                        <input
                            type="text"
                            ref={catname}
                            className="form-control"
                            placeholder="Enter category name"
                            style={{ borderRadius: '20px 0 0 20px', padding: '10px' }}
                        />
                        <button
                            onClick={searchData}
                            className="btn btn-dark"
                            style={{
                                borderRadius: '0 20px 20px 0',
                                padding: '10px 20px',
                                fontWeight: 'bold'
                            }}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
