import Product from "./Product";

const h1 = {
    textAlign: 'center'
}

const style = {
    display: 'flex',
    flexWrap: 'wrap',
}

function Products(props) {
  return (
    <div>
        <h1 style={h1}>BEST SELERS</h1>
        <div style={style}>
            <Product 
            name="Canvases"
            category="off-white air jordan 1 canvas"
            price="32.00 - 120.00"
            />
            <Product 
            name="Posters"
            category="yeezy Boost 350 V2 frozen yellow poster"
            price="16.00 - 32.00"
            />
            <Product 
            name="Sticker"
            category="yeezy 350 V2 zebra sticker"
            price="5.00"
            />
            <Product 
            name="Adidas"
            category="Adidas yeezy powerphase calabasas poster"
            price="16.00 - 32.00"
            />
            <Product 
            name="Jordans"
            category="air jordan 4 red suede poster"
            price="16.00 - 32.00"
            />
            <Product 
            name="Balenciaga"
            category="Balenciaga triple S poster"
            price="16.00 - 32.00"
            />
            <Product 
            name="Nike"
            category="nike blazer mid sacai poster"
            price="16.00 - 32.00"
            />
            <Product 
            name="Artists"
            category="lil peep poster"
            price="16.00 - 32.00"
            />
        </div>
    </div>
  );
}

export default Products;