function View() {
    return (
        <div className="viewcontainer">
            <div className="row">
        <CardView
          title="Power Weeders"
          images={v1}
          Price="9999"
          rupess="&#x20B9;"
          alt="a"
         
        />
        <CardView
          title="Power Weeders"
          images={v5}
          Price="500"
          rupess="&#x20B9;"
          alt="b"
          
        />
        <CardView
          title="stihl power Weeder"
          images={v3}
          Price="7000"
          rupess="&#x20B9;"
          alt="c"
         
        />
        <CardView
          title="Lawn Mowers"
          images={v4}
          Price="500"
          rupess="&#x20B9;"
          alt="d"
         
        />
            </div>
        </div>
        );
}
export default View;