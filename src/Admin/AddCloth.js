import React, { useEffect, useState } from 'react';
import "./Admin.css";
import { useLocation, useNavigate } from 'react-router-dom';

const AddCloth = () => {
    const [productID, setProductID] = useState('');
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [gender, setGender] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [colors, setColors] = useState([{ Col: '', Images: [''] }]);
    const [rating, setRating] = useState('');
    const [reviewCount, setReviewCount] = useState('');
    const [mrp, setMRP] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    const [sizes, setSizes] = useState([{ Length: '', ItemCount: '' }]);
    const [productDetail, setProductDetail] = useState('');
    const [sizeFit, setSizeFit] = useState('');
    const [materialCare, setMaterialCare] = useState(['']);
    const [specifications, setSpecifications] = useState([{ Title: '', Data: '' }]);
    const [data, setData] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const condition = location.state || {};

    const validate = () => {
        if (condition !== "Pass") {
            navigate(`/adminlogin`);
        }
    };

    useEffect(() => {
        validate();
    }, [condition]);

    const getData = async () => {
        const response = await fetch("https://api-5e1h.onrender.com/clothe/all", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const resData = await response.json();
        console.log(resData);
        setData(resData);
    }

    useEffect(() => {
        getData();
    }, []);

    const delData = async (id) => {
        try {
            const res = await fetch(`https://api-5e1h.onrender.com/clothe/del/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();
            getData(); // Refresh the data after deletion
        } catch (error) {
            console.error("Delete error:", error);
        }
    }

    const addData = async (e) => {
        e.preventDefault();

        const newCloth = {
            ProductID: productID,
            Name: name,
            Brand: brand,
            Gender: gender,
            Category: category,
            Type: type,
            Color: colors,
            Review: { Rating: rating, Count: reviewCount },
            MRP: mrp,
            SellingPrice: sellingPrice,
            Sizes: sizes,
            ProductDetail: productDetail,
            SizeFit: sizeFit,
            MaterialCare: materialCare,
            Specification: specifications,
        };

        try {
            const res = await fetch("https://api-5e1h.onrender.com/clothe/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newCloth)
            });

            const resData = await res.json();

            if (resData.status === 201) {
                setProductID('');
                setName('');
                setBrand('');
                setGender('');
                setCategory('');
                setType('');
                setColors([{ Col: '', Images: [''] }]);
                setRating('');
                setReviewCount('');
                setMRP('');
                setSellingPrice('');
                setSizes([{ Length: '', ItemCount: '' }]);
                setProductDetail('');
                setSizeFit('');
                setMaterialCare(['']);
                setSpecifications([{ Title: '', Data: '' }]);
                alert('Cloth created successfully!');
                getData(); // Refresh the data
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }

    const handleColorChange = (index, event) => {
        const values = [...colors];
        if (event.target.name === "Col") {
            values[index].Col = event.target.value;
        } else {
            values[index].Images = event.target.value.split(',');
        }
        setColors(values);
    }

    const handleSizeChange = (index, event) => {
        const values = [...sizes];
        if (event.target.name === "Length") {
            values[index].Length = event.target.value;
        } else {
            values[index].ItemCount = event.target.value;
        }
        setSizes(values);
    }

    const handleSpecificationChange = (index, event) => {
        const values = [...specifications];
        if (event.target.name === "Title") {
            values[index].Title = event.target.value;
        } else {
            values[index].Data = event.target.value;
        }
        setSpecifications(values);
    }

    return (
        <section className="addcategories-main">
            <div className="addcategories-container">
                <div className="addcategories-input">
                    <input type="text" placeholder='Product ID' value={productID} onChange={(e) => setProductID(e.target.value)} />
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder='Brand' value={brand} onChange={(e) => setBrand(e.target.value)} />
                    <input type="text" placeholder='Gender' value={gender} onChange={(e) => setGender(e.target.value)} />
                    <input type="text" placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)} />
                    <input type="text" placeholder='Type' value={type} onChange={(e) => setType(e.target.value)} />
                    {colors.map((color, index) => (
                        <div key={index}>
                            <input type="text" placeholder='Color' name="Col" value={color.Col} onChange={(e) => handleColorChange(index, e)} />
                            <input type="text" placeholder='Images (comma separated)' name="Images" value={color.Images.join(',')} onChange={(e) => handleColorChange(index, e)} />
                        </div>
                    ))}
                    <input type="number" placeholder='Rating' value={rating} onChange={(e) => setRating(e.target.value)} />
                    <input type="number" placeholder='Review Count' value={reviewCount} onChange={(e) => setReviewCount(e.target.value)} />
                    <input type="number" placeholder='MRP' value={mrp} onChange={(e) => setMRP(e.target.value)} />
                    <input type="number" placeholder='Selling Price' value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} />
                    {sizes.map((size, index) => (
                        <div key={index}>
                            <input type="text" placeholder='Length' name="Length" value={size.Length} onChange={(e) => handleSizeChange(index, e)} />
                            <input type="number" placeholder='Item Count' name="ItemCount" value={size.ItemCount} onChange={(e) => handleSizeChange(index, e)} />
                        </div>
                    ))}
                    <input type="text" placeholder='Product Detail' value={productDetail} onChange={(e) => setProductDetail(e.target.value)} />
                    <input type="text" placeholder='Size Fit' value={sizeFit} onChange={(e) => setSizeFit(e.target.value)} />
                    {materialCare.map((care, index) => (
                        <input key={index} type="text" placeholder='Material Care' value={care} onChange={(e) => {
                            const values = [...materialCare];
                            values[index] = e.target.value;
                            setMaterialCare(values);
                        }} />
                    ))}
                    {specifications.map((spec, index) => (
                        <div key={index}>
                            <input type="text" placeholder='Specification Title' name="Title" value={spec.Title} onChange={(e) => handleSpecificationChange(index, e)} />
                            <input type="text" placeholder='Specification Data' name="Data" value={spec.Data} onChange={(e) => handleSpecificationChange(index, e)} />
                        </div>
                    ))}
                    <button onClick={addData} >Submit</button>
                </div>
                <div className="addcategories-table">
                    <h2>View Clothes</h2>
                    <p>Total Count: {data.length}</p>
                    <table className='border'>
                        <thead>
                            <tr>
                                <th>Sr. No</th>
                                <th>Product ID</th>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>Gender</th>
                                <th>Category</th>
                                <th>Type</th>
                                <th>Colors</th>
                                <th>Rating</th>
                                <th>Review Count</th>
                                <th>MRP</th>
                                <th>Selling Price</th>
                                <th>Sizes</th>
                                <th>Product Detail</th>
                                <th>Size Fit</th>
                                <th>Material Care</th>
                                <th>Specifications</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((res, id) => (
                                <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td>{res.ProductID}</td>
                                    <td>{res.Name}</td>
                                    <td>{res.Brand}</td>
                                    <td>{res.Gender}</td>
                                    <td>{res.Category}</td>
                                    <td>{res.Type}</td>
                                    <td>
                                        {res.Color.map((color, index) => (
                                            <div key={index}>
                                                <span>{color.Col}</span>
                                                <img src={color.Images.join(', ')}></img>
                                            </div>
                                        ))}
                                    </td>
                                    <td>{res.Review.Rating}</td>
                                    <td>{res.Review.Count}</td>
                                    <td>{res.MRP}</td>
                                    <td>{res.SellingPrice}</td>
                                    <td>
                                        {res.Sizes.map((size, index) => (
                                            <div key={index}>
                                                <span>{size.Length}</span>
                                                <span>{size.ItemCount}</span>
                                            </div>
                                        ))}
                                    </td>
                                    <td>{res.ProductDetail}</td>
                                    <td>{res.SizeFit}</td>
                                    <td>{res.MaterialCare.join(', ')}</td>
                                    <td>
                                        {res.Specification.map((spec, index) => (
                                            <div key={index}>
                                                <span>{spec.Title}: {spec.Data}</span>
                                            </div>
                                        ))}
                                    </td>
                                    <td><button onClick={() => delData(res._id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default AddCloth;
