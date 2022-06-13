import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/countByCity?cities=Baku,İsmayıllı,Lankaran,Quba"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://thumbs.dreamstime.com/b/%D1%81%D1%82%D0%B0%D1%80%D0%B0%D1%8F-%D0%B8-%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B0-%D0%B1%D0%B0%D0%BA%D1%83-%D0%B0%D0%B7%D0%B5%D1%80%D0%B1%D0%B0%D0%B9%D0%B4%D0%B6%D0%B0%D0%BD-%D0%B8%D0%B7-156594978.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Baku</h1>
              <h2>{data[0]} hotels</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Quba</h1>
              <h2>{data[1]} hotels</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/144008912.jpg?k=094efd9d73663a0a173c1d287eba8155e60e9af97164278ccc0e206d2be24a8c&o=&hp=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ismayilli</h1>
              <h2>{data[2]} hotels</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://exp.cdn-hotels.com/hotels/37000000/36030000/36024100/36024084/5cbebae5_z.jpg?impolicy=fcrop&w=500&h=333&q=medium"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Lenkeran</h1>
              <h2>{data[2]} hotels</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
