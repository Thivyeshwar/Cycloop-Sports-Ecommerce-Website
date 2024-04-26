import { Fragment, useState } from "react"
import { useDispatch } from "react-redux";
import { createProduct } from "../../State/Product/Action";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 }
]

const CreateProductsForm = () => {
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title:"",
    color: "",
    discountedPrice: "",
    price: "",
    discountPercent: "",
    size: initialSizes,
    quantity: "",
    toplevelcategory: "",
    secondlevelcategory: "",
    thirdlevelcategory: "",
    description: ""
  });
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? name = "quantity" : name = e.target.name;

    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }))
  };

  const handleSubmit = (e) => {
    console.log("Product Data sending"+productData);
    e.preventDefault();
    dispatch(createProduct({data: productData }))
    
  }


  return (
    <div className="p-10">
      <Fragment>
        <Typography variant="h3" sx={{ textAlign: "center" }} className="py-10 text-center">
          Add New Product
        </Typography>
        <form onSubmit={handleSubmit} className="createProductContainer min-h-screen">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Image URL" name="imageUrl" value={productData.imageUrl} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Brand" name="brand" value={productData.brand} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Title" name="title" value={productData.title} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Color" name="color" value={productData.color} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Quantity" name="quantity" value={productData.quantity} onChange={handleChange} type="number" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Price" name="price" value={productData.price} onChange={handleChange} type="number" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="DiscountedPrice" name="discountedPrice" value={productData.discountedPrice} onChange={handleChange} type="number" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="DiscountPercent" name="discountPercent" value={productData.discountPercent} onChange={handleChange} type="number" />
            </Grid>
            <Grid item xs={6} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Top Level Category</InputLabel>
                <Select name="toplevelcategory" value={productData.toplevelcategory} onChange={handleChange} label="Top Level Category">
                  <MenuItem value="Sports">Sports</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Second Level Category</InputLabel>
                <Select name="secondlevelcategory" value={productData.secondlevelcategory} onChange={handleChange} label="Second Level Category">
                  <MenuItem value="Collections">Collections</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Third Level Category</InputLabel>
                <Select name="thirdlevelcategory" value={productData.thirdlevelcategory} onChange={handleChange} label="Third Level Category">
                  <MenuItem value="Cycle">Cycle</MenuItem>
                  <MenuItem value="Helmets">Helmets</MenuItem>
                  <MenuItem value="Lights">Lights</MenuItem>
                  <MenuItem value="Jersey">Jersey</MenuItem>
                  <MenuItem value="Shoes">Shoes</MenuItem>
                  <MenuItem value="Apparels">Apparels</MenuItem>
                  <MenuItem value="Cycle computer">Cycle computer</MenuItem>
                  <MenuItem value="Indoor trainers">Indoor Trainers</MenuItem>
                  <MenuItem value="Nutritions">Nutritions</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth id="outlined-multiline-static" label="Description" multiline name="description" rows={3} onChange={handleChange} value={productData.description} />
            </Grid>
            {productData.size.map((size, index) => (
              <Grid container item spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Size Name" name="name" value={size.name} onChange={(event) => handleSizeChange(event, index)} required fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Quantity" name="size_quantity" type="number" onChange={(event) => handleSizeChange(event, index)} required fullWidth />
                </Grid>
              </Grid>
            ))}

            <Grid item xs={12}>
              <Button variant="contained" sx={{ p: 1.8 }} className="py-20" size="large" type="submit">Add New Product</Button>
            </Grid>


          </Grid>

        </form>
      </Fragment>
    </div>

  );

}

export default CreateProductsForm;