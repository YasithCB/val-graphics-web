import "../../assets/css/service-category-page/sub-category-card.css";

export default function SubCategoryCard({ item }) {
  return (
    <section className="col-12 col-md-5 col-lg-3">
      <div className="service-card">
        {/* Image */}
        <div
          className="service-card-img"
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>

        {/* Text Content */}
        <div className="service-card-content mx-3 p-3">
          <h3>{item.name}</h3>

          <p className="text-white-50">{item.desc}</p>

          {/*/!* Materials List *!/*/}
          {/*{item.materials && (*/}
          {/*  <div className="materials-list mt-3">*/}
          {/*    <h5 className="mb-2">Available Materials</h5>*/}
          {/*    {item.materials.map((mat, idx) => (*/}
          {/*      <p key={idx} className="text-white-50">*/}
          {/*        {mat.name}*/}
          {/*      </p>*/}
          {/*    ))}*/}
          {/*  </div>*/}
          {/*)}*/}
        </div>
      </div>
    </section>
  );
}
