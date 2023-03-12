function Rentproduct() {
    return (
      <div className="viewcontainerR">
        <div className="rowR">
        <Rent_Card
            title="product 1"
            images={p7}
            Price="9999"
            rupess="&#x20B9;"
            alt="a"
           
          />
          <Rent_Card
            title="product 2"
            images={p6}
            Price="500"
            rupess="&#x20B9;"
            alt="b"
            
          />
          <Rent_Card
            title="product 3"
            images={p5}
            Price="7000"
            rupess="&#x20B9;"
            alt="c"
           
          />
          <Rent_Card
            title="product 4"
            images={p4}
            Price="500"
            rupess="&#x20B9;"
            alt="d"
           
          />
        </div>
      </div>
    );
  }
  export default Rentproduct;